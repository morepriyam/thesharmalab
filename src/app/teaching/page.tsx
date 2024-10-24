import React from "react";

const courses = [
  {
    code: "CHM 53300",
    title: "Introduction to Biochemistry I",
    description:
      "This course provides an in-depth introduction to the fundamental principles of biochemistry, including the structure and function of proteins, enzymes, and an overview of metabolism. Key topics include enzyme kinetics, thermodynamics, and the regulation of metabolic pathways.",
  },
  {
    code: "CHM 53400",
    title: "Introduction to Biochemistry II",
    description:
      "Building on concepts from Biochemistry I, this course explores advanced topics such as nucleic acids, gene expression, and complex metabolic processes. It also covers mechanisms of signal transduction and the biochemical basis of diseases.",
  },
  {
    code: "CHM 53800",
    title: "Molecular Biotechnology",
    description:
      "This course offers an overview of modern biotechnological applications, focusing on recombinant DNA technology, protein engineering, and genome editing. It emphasizes both the theoretical foundation and practical applications in biotechnology industries.",
  },
  {
    code: "CHM 33500",
    title: "Biochemistry Laboratory",
    description:
      "A laboratory-based course designed to provide hands-on experience with essential biochemical techniques. Students will learn methods such as chromatography, electrophoresis, and enzyme assays, and will develop skills in data analysis and scientific reporting.",
  },
];

export default function Page() {
  return (
    <div className="p-4">
      <div className="mt-4 text-center font-mono text-xl">
        <h1 className="text-3xl font-bold">Teaching</h1>
      </div>

      <div className="mt-12 w-full space-y-8">
        {courses.map((course) => (
          <div key={course.code} className="border-b pb-4">
            <h2 className="font-mono text-2xl font-bold">{course.code}</h2>
            <h3 className="mt-1 text-xl font-semibold">{course.title}</h3>
            <p className="mt-2 text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
