'use client'
import Image, { StaticImageData } from 'next/image';
import Rating from '@mui/material/Rating';  
import { styled } from '@mui/system';
import { RatingProps } from '@/types/propertyTypes';



const CustomRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FFD56C',  
  } 
});

const RatingCard = ({ rating }: { rating: RatingProps }) => {
  return (
    <div
      className="bg-[#1E1E1E] text-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
      style={{ width: '100%', height: '100%' }}
    >
      
      <div className="flex gap-1 mb-4">
        <CustomRating
          value={rating.stars}  
          readOnly  
          precision={0.5}  
        />
      </div>

      {/* Review Text */}
      <p className="text-gray-300 mb-4 flex-grow">{rating.review}</p>

      {/* Profile Section - Always at the bottom */}
      <div className="flex items-center mt-4">
        <Image
          src={rating.reviewerImage}
          alt={`${rating.reviewerName}'s profile picture`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="font-bold text-white">{rating.reviewerName}</h3>
          <p className="text-gray-400">{rating.reviewerLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
