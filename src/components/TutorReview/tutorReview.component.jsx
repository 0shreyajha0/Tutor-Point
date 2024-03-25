import React from "react";
import { TutorReviewCard } from "../TutorReviewCard";

export const TutorReview = () => {
  // Sample data for tutor reviews
  const tutorReviews = [
    {
      name: "John Doe",
      image: "url/to/image1.jpg",
      subject: "Mathematics",
      review: "Great tutor, helped me a lot!",
      rating: 4.5,
      gender: "male",
    },
    {
      name: "Jane Smithsons",
      image: "url/to/image2.jpg",
      subject: "Physics",
      review: "Excellent explanations!",
      rating: 5,
      gender: "male",
    },
    {
      name: "Alice Johns",
      image: "url/to/image3.jpg",
      subject: "English Literature",
      review: "Very knowledgeable and patient.",
      rating: 4,
      gender: "female",
    },
    {
      name: "Bob Brown",
      image: "url/to/image4.jpg",
      subject: "History",
      review: "Made history fun to learn!",
      rating: 4.5,
      gender: "male",
    },
    {
      name: "Eva Green",
      image: "url/to/image5.jpg",
      subject: "Chemistry",
      review: "Clear and concise teaching.",
      rating: 3.5,
      gender: "female",
    },
  ];

  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "columnn",
          alignItems: "center",
        }}
      >
        <h2>The Perfect Match</h2>
        <p>
          More than one million students gave a<br />
          <b>5 star review to their tutor</b>
        </p>
      </div>
      <div>
        {tutorReviews.map((tutor, index) => (
          <TutorReviewCard key={index} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};