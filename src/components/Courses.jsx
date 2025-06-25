import React from "react";

const Courses = () => {
  // Localized CourseCard Sub-Component
  const CourseCard = ({ title, description, items, videoCount, duration }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          {/* Left Section */}
          <div className="flex items-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-orange-500 text-lg">
              ▶
            </div>
            <div className="ml-4">
              <div className="text-sm text-gray-500 flex items-center space-x-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span>5.0 (392 reviews)</span>
                <span>• 2,538 students watched</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-4">
              <button className="bg-green-500 text-white py-1 px-3 rounded-lg text-sm hover:bg-green-600 flex">
                {videoCount} Video Classes 
                <p className="text-sm text-white-600">{duration}</p>
              </button>
             
            </div>
          </div>
        </div>
        {/* Features List */}
        {items && (
          <ul className="mt-4 space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 flex items-center space-x-2"
              >
                <div className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-gray text-xs">
                  ✓
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  // List of Courses Data
  const courses = [
    {
      title: "Professional graphic design tutorial full course with exercise file",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of the managments.",
      videoCount: "7",
      duration: "4 hrs",
      items: null,
    },
    {
      title: "Become ultimate photoshop expert within 30 days",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of the managments.",
      videoCount: "7",
      duration: "4 hrs",
      items: [
        "How to reduce file pixel dimensions without losing quality",
        "Create vector file from rasterize layer styles",
        "How to make logo pixel perfect with different extensions",
        "Make color gradient with photoshop built-in tools",
      ],
    },
    {
      title: "After effects animation tutorial with photoshop documents",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of the managments.",
      videoCount: "7",
      duration: "4 hrs",
      items: null,
    },
    {
      title: "Adobe illustrator vector art design mockup",
      description:
        "Get your tutorials delivered at let home collect sample from the victory of the managments.",
      videoCount: "7",
      duration: "4 hrs",
      items: null,
    },
  ];

  return (
    <div className=" bg-gray-100 py-8">
      <header className="text-center mb-8">
        <p className="text-orange-400 uppercase font-bold text-sm">Quality Features</p>
        <h1 className="text-2xl font-extrabold text-gray-800">Popular Designing Course</h1>
      </header>
      <div className="space-y-6 px-4 md:px-8 lg:px-16">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
