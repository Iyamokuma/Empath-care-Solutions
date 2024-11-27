import React from "react";

export const About = () => {
  return (
    <>
      <section className="about mb-16">
        <div className="container">
          {/* Heading Section */}
          <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              About{" "}
              <span className="text-[#5CE1E6] underline underline-offset-4 decoration-1 font-light">
                EMPATHCARE
              </span>
            </h1>
            <span className="text-[14px] mt-2 block">
              EmpathCare Solutions is a quality-driven care provider dedicated to
              delivering exceptional health and social care services tailored to
              each individual's unique needs. Our mission is to support and
              empower individuals to live healthier, more independent lives
              within the comfort and familiarity of their own homes and
              communities.
            </span>
          </div>

          {/* Content Section */}
          <div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
            {/* Core Values Section */}
            <div className="core-values flex flex-col justify-start p-6">
              <h2 className="text-xl font-semibold text-black mb-4">
                Our Core Values
              </h2>
              <p className="text-[14px] mb-2">
                At EmpathCare Solutions, we are committed to delivering care
                based on the following five pillars:
              </p>
              <ul className="list-disc pl-5 text-[14px]">
                <li>
                  <strong>Safe:</strong> Ensuring the safety of our clients and
                  staff with rigorous protocols and continuous risk assessment.
                </li>
                <li>
                  <strong>Caring:</strong> Delivering services with compassion,
                  empathy, and respect for personal preferences.
                </li>
                <li>
                  <strong>Effective:</strong> Utilizing evidence-based care
                  practices to achieve positive outcomes.
                </li>
                <li>
                  <strong>Responsive:</strong> Adapting promptly to changing
                  needs and requests.
                </li>
                <li>
                  <strong>Well-led:</strong> Maintaining a strong leadership
                  culture that promotes innovation and accountability.
                </li>
              </ul>
            </div>

            {/* Image Block */}
            <div className="images rounded-lg relative overflow-hidden h-72 w-full">
              <img
                src="https://media.istockphoto.com/id/1992538239/photo/nurse-support-and-walker-with-old-woman-in-park-for-helping-person-with-a-disability-and.jpg?s=612x612&w=0&k=20&c=FEoHD2J57Kkj7wMih8pxQ3VRMXxAycOMlQT64XvHjGg="
                alt="Empowering Lives"
                className="rounded-t-lg object-cover w-full h-72"
              />
              <div className="overlay flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center">
                <h2 className="text-3xl text-white font-semibold">
                  Empowering Lives
                </h2>
                <button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Growth Section */}
          <div className="growth mt-8 p-6 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold text-black mb-4">
              An Environment for Growth and Excellence
            </h2>
            <p className="text-[14px]">
              At EmpathCare Solutions, we recognize that our employees are our
              most valuable asset. We create an environment where every team
              member can thrive, feel valued, and grow professionally. Our
              culture promotes collaboration, respect, and open communication,
              empowering our team to deliver exceptional care while advancing
              their skills and careers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export const InstructorCard = (props) => {
  return (
    <div className="box p-5 py-5 rounded-md">
      <div className={`${props.color}`}>{props.icon}</div>
      <div className="text mt-2">
        <h4 className="text-lg font-semibold text-black">{props.title}</h4>
        <p className="text-[15px]">{props.desc}</p>
      </div>
    </div>
  );
};
