import React from "react";
import { TutorProfileCard } from "../TutorProfileCard";

export const TutorProfile = () => {
  const tutorReviews = [
    {
      name: "John Doe",
      image: "url/to/image1.jpg",
      location: "New York",
      subject: "Mathematics",
      review: "Great tutor, helped me a lot!",
      rating: 4.5,
      noOfReviews: 20,
      rate: "$30/hr",
    },
    {
      name: "Jane Smith",
      image: "url/to/image2.jpg",
      location: "Los Angeles",
      subject: "Physics",
      review: "Excellent explanations!",
      rating: 5,
      noOfReviews: 15,
      rate: "$35/hr",
    },
    {
      name: "Alice Johnson",
      image: "url/to/image3.jpg",
      location: "Chicago",
      subject: "English Literature",
      review: "Very knowledgeable and patient.",
      rating: 4,
      noOfReviews: 25,
      rate: "$25/hr",
    },
    {
      name: "Bob Brown",
      image: "url/to/image4.jpg",
      location: "Houston",
      subject: "History",
      review: "Made history fun to learn!",
      rating: 4.5,
      noOfReviews: 18,
      rate: "$30/hr",
    },
    {
      name: "Eva Green",
      image: "url/to/image5.jpg",
      location: "San Francisco",
      subject: "Chemistry",
      review: "Clear and concise teaching.",
      rating: 3.5,
      noOfReviews: 22,
      rate: "$40/hr",
    },
    {
      name: "Michael Clark",
      image: "url/to/image6.jpg",
      location: "Miami",
      subject: "Biology",
      review: "Extremely knowledgeable, highly recommend!",
      rating: 4.8,
      noOfReviews: 30,
      rate: "$45/hr",
    },
    {
      name: "Sarah White",
      image: "url/to/image7.jpg",
      location: "Seattle",
      subject: "Computer Science",
      review: "Fantastic teacher, made complex concepts easy to understand.",
      rating: 4.9,
      noOfReviews: 28,
      rate: "$50/hr",
    },
    {
      name: "David Lee",
      image: "url/to/image8.jpg",
      location: "Boston",
      subject: "Economics",
      review: "Patient and thorough, helped me ace my exams!",
      rating: 4.6,
      noOfReviews: 23,
      rate: "$35/hr",
    },
  ];

  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {tutorReviews.map((tutor, index) => (
        <TutorProfileCard key={index} tutor={tutor} />
      ))}
    </div>
  );
};
