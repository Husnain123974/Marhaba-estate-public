import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MultiSelect } from "../components/MultiSelect";
import { v4 as uuidv4 } from "uuid"; // Import UUID generator
import supabase from "@/config/supabase";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { nanoid } from "nanoid";

import { CustomDropdownMenu } from "./DropDownMenu";
import { DatePicker } from "./DatePicker";
import FileUpload from "./FileUpload";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const amenities = [
  { value: "jacuzzi", label: "Jacuzzi" },
  { value: "cctv_cameras", label: "CCTV Cameras" },
  { value: "children_play_area", label: "Children Play Area" },
  { value: "covered_parking", label: "Covered Parking" },
  { value: "landmark_view", label: "Landmark View" },
  { value: "community_center", label: "Community Center" },
  { value: "supermarket_nearby", label: "Supermarket Nearby" },
  { value: "shared_gym", label: "Shared Gym" },
  { value: "kitchen_appliances", label: "Kitchen Appliances" },
  { value: "shared_swimming_pool", label: "Shared Swimming Pool" },
  { value: "supermarket_nearby1", label: "Supermarket Nearby1" },
  { value: "shared_gym1", label: "Shared Gym1" },
  { value: "kitchen_appliances1", label: "Kitchen Appliances1" },
  { value: "shared_swimming_pool1", label: "Shared Swimming Pool1" },
];


console.log(amenities);

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  data: { [key: string]: any } | null;
  isEditMode: boolean;
  ModalHeaderText: string;
  onEditOrCreateProject: (projectData: any) => void;
}

export function Modal({
  open,
  onClose,
  data,
  isEditMode,
  ModalHeaderText,
  onEditOrCreateProject,
}: EditModalProps) {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>(null); // Add state for PDF file

  console.log("Data ---------------- ",data);
  const [formData, setFormData] = useState<any>({
    id: "", // Add ID field for UUID
    builders: "",
    price: "",
    name: "",
    location: "",
    bedrooms: "",
    area: "",
    paymentplan: "",
    projectcompletiondate: "",
    description: "",
    isgreystructure: false,
    isfeatured: false,
    amenities: [],
    images: [],
    propertytype: "", // Add property type to the form data
    pdfUrl:""
  });

// Modify useEffect
useEffect(() => {
  console.log("Data ----- ", data);
  if (data) {
    // Populate form data for edit mode
    setFormData({ ...data });
    
    // Set amenities if data is coming for edit mode
    if (data.amenities && Array.isArray(data.amenities)) {
      const selectedAmenities = amenities
        .filter((amenity) => data.amenities.includes(amenity.value))
        .map((amenity) => amenity.value);
      console.log("Selected amenities ------ ",selectedAmenities);
      setSelectedAmenities(selectedAmenities); // Set selected amenities in the state
      setFormData((prevData: any) => ({
        ...prevData,
        amenities: selectedAmenities, // Update formData with selected amenities
      }));
    }
    console.log("Form Data ")
  } else if (!isEditMode) {
    // Set initial values for new entry mode
    setFormData({
      id: uuidv4(), // Generate UUID for new records
      builders: "",
      price: "",
      name: "",
      location: "",
      bedrooms: "",
      area: "",
      paymentplan: "",
      projectcompletiondate: "",
      description: "",
      isgreystructure: false,
      isfeatured: false,
      amenities: [],
      images: [],
      propertytype: "", // Add property type to the form data
      pdfUrl:""
    });
  }
}, [data, isEditMode]);


  // Handle the selected property type from child component
  const handleSelectPropertyType = (selectedType: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      propertytype: selectedType,
    }));
  };

  const handlePDFFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPdfFile(event.target.files[0]); // Set the selected PDF file
    }
  };


  // Handle date change from DatePicker and update formData
  const handleDateChange = (selectedDate: Date | undefined) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectcompletiondate: selectedDate?.toISOString().split("T")[0] || "", // Convert to YYYY-MM-DD format
    }));
  };

  // Function to handle amenities change
  const handleAmenitiesChange = (selected: string[]) => {
    console.log("Amenities ---- ", selected);
    setSelectedAmenities(selected); // Update local state for selected amenities
    setFormData((prevData: any) => ({
      ...prevData,
      amenities: selected, // Update the formData with selected amenities
    }));

    setTimeout(() => {
      console.log("Form Data ---- ", formData);
    }, 200);
  };

  const handleIsGreyChange = (value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      isgreystructure: value === "yes", // Set isGrey to true if 'yes' is selected, otherwise false
    }));
  };

  const handleIsFeaturedChange = (value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      isfeatured: value === "yes", // Set isFeatured to true if 'yes' is selected, otherwise false
    }));
  };

  // Handle input changes and update local state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [id]: value,
    }));
  };




  // Function to upload PDF to Supabase and call /api/uploadfloorplan
  const uploadPdfAndSave = async () => {
    if (pdfFile) {
      try {
        const uniqueId = nanoid();
        const fileName = `${uniqueId}#floorplans.pdf`;
        const { data, error: uploadError } = await supabase.storage
          .from("nextsupabase")
          .upload(fileName, pdfFile, { cacheControl: "3600", upsert: false });

        if (uploadError) {
          console.error("PDF Upload Error:", uploadError);
          return;
        }

        const { data:publicUrl  } = supabase.storage
          .from("nextsupabase")
          .getPublicUrl(data.path);

         
        // const response = await fetch("/api/uploadfloorplan", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     propertyId: formData.id,
        //     pdfUrl: publicUrl,
        //   }),
        // });

        // if (!response.ok) {
        //   throw new Error("Failed to save PDF URL in database");
        // }

        console.log("PDF uploaded and URL saved successfully:", publicUrl);
        return publicUrl;
      } catch (error) {
        console.error("Error uploading PDF or saving URL:", error);
      }
    }
  };

  // const handleSave = async () => {
  //   // Upload PDF and get public URL
  //   const publicUrl = await uploadPdfAndSave();
    
  //   // Add the public URL to formData
  //   setFormData((prevFormData:any) => ({
  //     ...prevFormData,
  //     pdfUrl: publicUrl, // Add the PDF URL to formData
  //   }));
  
  //   // Call onEditOrCreateProject with updated formData
  //   onEditOrCreateProject({ ...formData, pdfUrl: publicUrl });
  
  //   console.log(isEditMode ? "Edited Data:" : "Added Data:", formData);
    
  //   onClose(); // Close the modal after saving
  // };


  const handleSave = async () => {
    // Upload PDF and get public URL
    const publicUrl = await uploadPdfAndSave();
    
    if (publicUrl) {
      // Create a temporary updated formData object with the pdfUrl
      const updatedFormData = { ...formData, pdfUrl: publicUrl };
  
      // Call onEditOrCreateProject with the updated formData
      onEditOrCreateProject(updatedFormData);
  
      console.log(isEditMode ? "Edited Data:" : "Added Data:", updatedFormData);
  
      // Close the modal after saving
      onClose();
    } else {
      console.error("Failed to upload PDF and get URL.");
    }
  };

  const handleCancel = () => {
    onClose(); // Close the modal without saving
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle>{ModalHeaderText}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-8 mr-[-17px]">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="builders" className=" ">
              Builders
            </Label>
            <Input
              id="builders"
              value={formData.builders}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className=" ">
              Price
            </Label>
            <Input
              id="price"
              value={formData.price}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className=" ">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className=" ">
              Location
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bedrooms" className=" ">
              Bedrooms
            </Label>
            <Input
              id="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="area" className=" ">
              Area
            </Label>
            <Input
              id="area"
              value={formData.area}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="paymentplan" className=" ">
              Payment Plan
            </Label>
            <Input
              id="paymentplan"
              value={formData.paymentplan}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className=" ">
              Description
            </Label>
            <Input
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amenities" className=" ">
              Amenities
            </Label>

            <div className="col-span-3">
              {/* Wrap MultiSelect inside a div with col-span-3 */}
              <MultiSelect
                options={amenities}
                onValueChange={handleAmenitiesChange}
                defaultValue={selectedAmenities}
                placeholder="Select Amenities"
                variant="inverted"
                maxCount={20}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feature_images" className=" ">
              Feature Images
            </Label>

            <div className="col-span-3">
            <FileUpload formData={formData} setFormData={setFormData} />
            </div>
          </div>


          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pdf_upload" className=" ">
              Upload Floorplan PDF
            </Label>
            <Input
              type="file"
              id="pdf_upload"
              onChange={handlePDFFileChange}
              accept=".pdf"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectcompletiondate" className=" ">
              Completion Date
            </Label>
            <DatePicker  selectedDate={formData.projectcompletiondate} onDateChange={handleDateChange} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amenities" className=" ">
              Property Type
            </Label>

            <div className="col-span-3">
              <CustomDropdownMenu
                onSelectPropertyType={handleSelectPropertyType}
                selectedValue={formData.propertytype}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amenities" className=" ">
              Grey Structure
            </Label>

            <div className="col-span-3">
              <RadioGroup
                className="grid grid-cols-4 items-center gap-4"
                defaultValue={formData.isgreystructure ? "yes" : "no"}
                onValueChange={handleIsGreyChange} // Add onChange handler
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Yes</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amenities" className=" ">
              Featured
            </Label>

            <div className="col-span-3">
              <RadioGroup
                className="grid grid-cols-4 items-center gap-4"
                defaultValue={formData.isfeatured ? "yes" : "no"}
                onValueChange={handleIsFeaturedChange} // Add onChange handler
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Yes</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSave}>
            {isEditMode ? "Save" : "Add"} {/* Dynamic button label */}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
