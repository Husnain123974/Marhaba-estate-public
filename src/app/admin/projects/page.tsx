
'use client'
import { DataTable } from "../components/DataTable";
import { useEffect, useState } from 'react';
import Image from 'next/image';  
import editSVG from "../../../../public/icons/edit.svg";
import deleteSVG from "../../../../public/icons/delete.svg";
import { Modal } from "../components/Modal";

import { DeleteModal } from '../components/DeleteModal'; // Import the DeleteModal component
import { fetchFromApi } from "@/utils/apiClient";
import withAuth from "@/utils/withAuth";

const ProjectsPage = () => {
const headers = ["Name", "Price", "Builders", "Location", "Bed Rooms", "Size", "Payment Plan", "Completion Date", "Description"];
  
  const [data, setData] = useState([]); // State to store data
  const [selectedRows, setSelectedRows] = useState<number[]>([]); // Track selected rows
  const [isModalOpen, setIsModalOpen] = useState(false); // Edit modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Delete modal state
  const [selectedRowData, setSelectedRowData] = useState<any>(null); // Data of the selected row
  const [isEditMode, setIsEditMode] = useState(false); // Track if we are in edit mode or add mode
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null); // Index of the row to delete

  const handleSelectionChange = (selectedIndexes: number[]) => {
    console.log("Selected indxes - ------ ", selectedIndexes);
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

 
  // const handleEditOrCreateProject = async (projectData: any) => {
  //   try {
  //     const response = await fetch('/api/manageProjects', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...projectData, isEditMode }),
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       console.log(result.message);
  //     } else {
  //       console.error(result.message);
  //     }
  //   } catch (error) {
  //     console.error('Error saving project:', error);
  //   }
  // };

  // const handleEditOrCreateProject = async (projectData: any) => {
  //   try {
  //     // Use the fetchFromApi client to call the API with the required endpoint and options
  //     // const result = await fetchFromApi('/api/manageProjects', {
  //     //   method: 'POST',
  //     //   body: { ...projectData, isEditMode },
  //     // });
  
  //     // Handle the response
  //     // console.log(result.message);
  //   } catch (error) {
  //     console.error('Error saving project:', error);
  //   }
  // };

  const handleEditOrCreateProject = async (projectData: any) => {
    try {
      console.log("Before save data to db -------- ",projectData);
      const method = isEditMode ? 'PUT' : 'POST';
      const result = await fetchFromApi('/api/manageProjects', {
        method,
        body: JSON.stringify(projectData),
      });
  
      console.log(result.message);
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };
  

  const handleDeleteClick = () => {
 
    if (selectedRows.length >0) {
      console.log("Selected rows ------ ", selectedRows)
      setDeleteIndex(selectedRows[0]); // Track the index of the row to delete
      setIsDeleteModalOpen(true); // Open delete modal
    }
  };

  // const handleDeleteProject = () => {
  //   if (deleteIndex !== null) {
  //     const updatedData = [...data];
  //     updatedData.splice(deleteIndex, 1); // Remove the selected Project
  //     setData(updatedData); // Update the data
  //     setSelectedRows([]); // Clear selection
  //     setIsDeleteModalOpen(false); // Close the delete modal
  //   }
  // };



 
// const handleDeleteProject = async () => {
//   try {
//     const projectId = data[deleteIndex]?.id;
//     // Send DELETE request to the backend with projectId
//     const result = await fetchFromApi(`/api/manageProjects`, {
//       method: 'DELETE',
//       body: JSON.stringify({ id: projectId }),
//     });

//     console.log(result);

//     if (result.status === 200) {
//       // Update frontend state after deletion

//       const updatedData = data.filter((item) => item.id !== projectId);
//       setData(updatedData); // Update the data array
//       setSelectedRows([]); // Clear selection
//       setIsDeleteModalOpen(false); // Close the delete modal
//     }
//   } catch (error) {
//     console.error('Error deleting project:', error);
//   }
// };

const handleDeleteProject = async () => {
  try {
 
    
    // Get IDs of selected projects
    const projectIds = selectedRows.map((index) => data[index]?.id);
    console.log("Ids ----- ", projectIds);
    // Send DELETE request to the backend with projectIds
    const result = await fetchFromApi(`/api/manageProjects`, {
      method: 'DELETE',
      body: JSON.stringify({ ids: projectIds }), // Send array of IDs for multiple deletes
    });

    console.log(result);

    if (result.status === 200) {
      // Update frontend state after deletion
      const updatedData = data.filter((item) => !projectIds.includes(item.id));
      setData(updatedData); // Update the data array
      setSelectedRows([]); // Clear selection
      setIsDeleteModalOpen(false); // Close the delete modal
    }
  } catch (error) {
    console.error('Error deleting projects:', error);
  }
};


  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false); // Close delete modal without action
  };

  useEffect(() => {
    setSelectedRowData(data);
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFromApi('/api/manageProjects', { method: 'GET' });
        // const mappedData = result.data.map(project => ({
        //   builders: project.builders, 
        //   price: `$${parseInt(project.price).toLocaleString()}`,
        //   name: project.name,   
        //   location: project.location,
        //   bedrooms: project.bedrooms,
        //   area: `${project.area} sqft`, // Adding 'sqft' suffix to size
        //   paymentplan: project.paymentplan, // Mapping 'paymentplan' to 'payment_plan'
        //   projectcompletiondate: project.projectcompletiondate, // Using 'projectcompletiondate' directly
        //   description: project.description
        // }));
        setData(result.data);  
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);
  

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

export default withAuth(ProjectsPage);