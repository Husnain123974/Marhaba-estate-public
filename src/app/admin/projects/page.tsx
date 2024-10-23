
'use client'
import { DataTable } from "../components/DataTable";
import { useEffect, useState } from 'react';
import Image from 'next/image';  
import editSVG from "../../../../public/icons/edit.svg";
import deleteSVG from "../../../../public/icons/delete.svg";
import { Modal } from "../components/Modal";


import { DeleteModal } from '../components/DeleteModal'; // Import the DeleteModal component

const ProjectsPage = () => {
  const headers = ["Title", "Price", "Name", "Location", "Bed Rooms", "Size", "Payment Plan", "Completion Date", "Description"];
  
  // Sample data
  const initialData = [
    {
      title: "Luxury Villa",
      price: "$1,500,000",
      name: "Ocean Breeze",
      location: "California",
      bedrooms: "5",
      size: "5000 sqft",
      payment_plan: "Installments",
      project_completion_date: "2024-12-01",
      description: "A beautiful ocean-side villa with modern amenities."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
    {
      title: "City Apartment",
      price: "$750,000",
      name: "Downtown Living",
      location: "New York",
      bedrooms: "3",
      size: "2000 sqft",
      payment_plan: "Cash",
      project_completion_date: "2023-08-15",
      description: "A cozy apartment located in the heart of the city."
    },
  ];

  const [data, setData] = useState(initialData); // State to store data
  const [selectedRows, setSelectedRows] = useState<number[]>([]); // Track selected rows
  const [isModalOpen, setIsModalOpen] = useState(false); // Edit modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Delete modal state
  const [selectedRowData, setSelectedRowData] = useState<any>(null); // Data of the selected row
  const [isEditMode, setIsEditMode] = useState(false); // Track if we are in edit mode or add mode
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null); // Index of the row to delete

  const handleSelectionChange = (selectedIndexes: number[]) => {
    setSelectedRows(selectedIndexes);
  };

  const handleEditClick = () => {
    if (selectedRows.length === 1) {
      const selectedRow = data[selectedRows[0]]; // Get the data of the selected row
      setSelectedRowData(selectedRow);
      setIsEditMode(true); // Set to edit mode
      setIsModalOpen(true); // Open the modal
    }
  };

  const handleAddClick = () => {
    setSelectedRowData(null); // Reset selected row data
    setIsEditMode(false); // Set to add mode
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRowData(null); // Clear selected row data on close
  };

 
  const handleEditOrCreateProject = async (projectData: any) => {
    try {
      const response = await fetch('/api/manageProjects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...projectData, isEditMode }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  

  const handleDeleteClick = () => {
    if (selectedRows.length === 1) {
      setDeleteIndex(selectedRows[0]); // Track the index of the row to delete
      setIsDeleteModalOpen(true); // Open delete modal
    }
  };

  const handleDeleteProject = () => {
    if (deleteIndex !== null) {
      const updatedData = [...data];
      updatedData.splice(deleteIndex, 1); // Remove the selected Project
      setData(updatedData); // Update the data
      setSelectedRows([]); // Clear selection
      setIsDeleteModalOpen(false); // Close the delete modal
    }
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false); // Close delete modal without action
  };

  useEffect(() => {
    setSelectedRowData(data);
  }, [data]);

  return (
    <div>
      {/* Table Header Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {selectedRows.length > 0 ? (
          <div className="flex space-x-2">
            {/* Edit SVG */}
            {selectedRows.length === 1 && (
              <button onClick={handleEditClick}>
                <Image src={editSVG} width={20} height={20} alt="edit" />
              </button>
            )}
            {/* Delete SVG */}
            <button onClick={handleDeleteClick}>
              <Image src={deleteSVG} width={20} height={20} alt="delete" />
            </button>
          </div>
        ) : (
          // Show "Add Project" button when no rows are selected
          <button
            onClick={handleAddClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow"
          >
            Add Project
          </button>
        )}
      </div>

      {/* Table Component */}
      <DataTable
        headers={headers}
        data={data}
        onSelectionChange={handleSelectionChange}
      />

      {/* Call Modal for both Add and Edit */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        data={selectedRowData}
        isEditMode={isEditMode}
        ModalHeaderText={isEditMode ? "Edit Project" : "Add Project"}
        onEditOrCreateProject={handleEditOrCreateProject}
      />

      {/* Call DeleteModal */}
      <DeleteModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDelete={handleDeleteProject}
        heading="Delete Project"
        content="Are you sure you want to delete this Project? This action cannot be undone."
      />
    </div>
  );
};

export default ProjectsPage;


 