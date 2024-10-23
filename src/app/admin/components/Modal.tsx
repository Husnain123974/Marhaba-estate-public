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

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

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
  { value: "shared_swimming_pool", label: "Shared swimming pool" },
  { value: "supermarket_nearby1", label: "Supermarket Nearby1" },
  { value: "shared_gym1", label: "Shared Gym1" },
  { value: "kitchen_appliances1", label: "Kitchen Appliances1" },
  { value: "shared_swimming_pool1", label: "Shared swimming pool1" },
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

 
  const [formData, setFormData] = useState<any>({
    id: "", // Add ID field for UUID
    title: "",
    price: "",
    name: "",
    location: "",
    bedrooms: "",
    size: "",
    payment_plan: "",
    project_completion_date: "",
    description: "",
    isGrey: false,
    isFeatured: false,
    amenities: [],
    images: [],
    propertyType: "", // Add property type to the form data
  });

  // Set the form data when the modal opens or data changes
  useEffect(() => {
    if (data) {
      setFormData({ ...data }); // Populate form data for edit mode
    } else if (!isEditMode) {
      setFormData({
        id: uuidv4(), // Generate UUID for new records
        title: "",
        price: "",
        name: "",
        location: "",
        bedrooms: "",
        size: "",
        payment_plan: "",
        project_completion_date: "",
        description: "",
        isGrey: false,
        isFeatured: false,
        amenities: [],
        images: [],
        propertyType: "", // Add property type to the form data
      });
    }
  }, [data, isEditMode]);

  // Handle the selected property type from child component
  const handleSelectPropertyType = (selectedType: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      propertyType: selectedType,
    }));
  };

  // Handle date change from DatePicker and update formData
  const handleDateChange = (selectedDate: Date | undefined) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      project_completion_date: selectedDate?.toISOString().split("T")[0] || "", // Convert to YYYY-MM-DD format
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
      isGrey: value === "yes", // Set isGrey to true if 'yes' is selected, otherwise false
    }));
  };

  const handleIsFeaturedChange = (value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      isFeatured: value === "yes", // Set isFeatured to true if 'yes' is selected, otherwise false
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

  const handleSave = () => {
    // Handle save logic here (e.g., API call, state update)
    onEditOrCreateProject(formData);
    console.log(isEditMode ? "Edited Data:" : "Added Data:", formData);
    onClose(); // Close the modal after saving
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
            <Label htmlFor="title" className=" ">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
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
            <Label htmlFor="size" className=" ">
              Size
            </Label>
            <Input
              id="size"
              value={formData.size}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="payment_plan" className=" ">
              Payment Plan
            </Label>
            <Input
              id="payment_plan"
              value={formData.payment_plan}
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
            <Label htmlFor="project_completion_date" className=" ">
              Completion Date
            </Label>
            <DatePicker onDateChange={handleDateChange} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amenities" className=" ">
              Property Type
            </Label>

            <div className="col-span-3">
              <CustomDropdownMenu
                onSelectPropertyType={handleSelectPropertyType}
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
                defaultValue={formData.isGrey ? "yes" : "no"}
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
                defaultValue={formData.isFeatured ? "yes" : "no"}
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
