import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import Filters from "../../components/Filters";
import DataTable from "../../components/DataTable";
import AddLookupModal from "../../components/AddLookupModal";
import SuccessModal from "../../components/SuccessModal";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { getLookupTypes,saveLookupType } from "../../services/apiEndpoints";

function Home() {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [lookupTypes, setLookupTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false); // Modal state
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [addModalData, setAddModalData] = useState();
    

    const handleSuccessOpen = () => {
        setSuccessModalOpen(true);
    };

    const handleSuccessClose = () => {
        fetchLookupTypes();
        setSuccessModalOpen(false);
    };

    useEffect(() => {
        fetchLookupTypes();
    }, []);

    const fetchLookupTypes = async () => {
        try {
            setLoading(true);
            const params = {
                name: "", // Optional filter by name
                status: "Active", // Optional filter by status
                sort: 1, // Example sort value
                pageNo: 0,
                pageSize: 100,
            };
            const data = await getLookupTypes(params);
            console.log(data)
            setLookupTypes(data.data); // Access the "data" array from the response
        } catch (err) {
            console.error("Error fetching lookup types:", err);
            setError("Failed to fetch lookup types. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddLookupType = async (newLookup) => {
        try {
            console.log(newLookup);
            if (addModalData?.id) {
                const response = await saveLookupType(newLookup.lookupTypeName, newLookup.comments, newLookup.isActive,addModalData?.id);
                if (response.isSuccess == true) {
                    handleSuccessOpen();
                }
            }
            else {
                const response = await saveLookupType(newLookup.lookupTypeName, newLookup.comments, newLookup.isActive);
                if (response.isSuccess == true) {
                    handleSuccessOpen();
                }
            }
        }
        catch (e) {
            console.log(e)
        }
    };

    const openLookupModalForAdd = () => {
        let data = {
            typeName: '',
            comments: '',
            iActive: false
        }
        setAddModalData(data);
        setModalOpen(true)
    }

    const openLookupModalForEdit = (record) => {
        let data = {
            id:record?.id,
            typeName: record?.lookupTypeName,
            comments: '',
            iActive:record?.status == "Active" ? true : false
        }
        setAddModalData(data);
        setModalOpen(true)
    }

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Navigate back to the login page
        // navigate("/login");
        window.location.reload();
    };

    return (
        <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
            {/* Sidebar */}
            <Sidebar
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />

            {/* Main Content */}
            <div
                style={{
                    flexGrow: 1,
                    transition: "margin-left 0.3s",
                    display: "flex",
                    flexDirection: "column",
                    overflowX: "auto", // Enable horizontal scrolling
                }}
            >
                {/* Scrollable TopBar */}
                <div style={{ overflowX: "auto" }}>
                    <TopBar onLogout={handleLogout} email={currentUser?.userEmail} toggleSidebar={() => { setDrawerOpen(false); toggleCollapse() }} toggleDrawer={() => { setCollapsed(false); toggleDrawer() }} />
                </div>

                {/* Scrollable Filters and DataTable */}
                <div
                    style={{
                        flexGrow: 1,
                        overflowY: "auto",
                        overflowX: "auto", // Horizontal scroll for DataTable
                        padding: "20px",
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <Filters handleLookupModal={openLookupModalForAdd} />
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p style={{ color: "red" }}>{error}</p>
                    ) : (
                        <DataTable onEdit={(record)=>{openLookupModalForEdit(record)}} onDelete={(record)=>{}} rows={lookupTypes} />
                    )}

                    {/* Add Lookup Modal */}
                    <AddLookupModal
                        open={modalOpen}
                        data={addModalData}
                        handleClose={() => setModalOpen(false)}
                        handleSave={handleAddLookupType}
                    />
                    <SuccessModal
                        open={successModalOpen}
                        handleClose={handleSuccessClose}
                        title="Success"
                        message={`Lookup type successfully  ${addModalData?.id ? "edited" : "added"}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;