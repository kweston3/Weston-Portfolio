import { Link } from "react-router-dom";

const HeroSection = ({ heroProject }) => {
  // Accept single project object
  return (
    <div style={{ width: "100%", height: "550px", position: "relative" }}>
      <div
        style={{
          backgroundColor: "#123456",
          height: "100%", // Use full height for each section
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div style={{ maxWidth: "1250px", width: "100%", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              width: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                color: "#fff",
                textAlign: "left",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  margin: "0",
                }}
              >
                {heroProject.name} {/* Use heroProject instead of project */}
              </h2>
              <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
                {heroProject.description}{" "}
                {/* Use heroProject instead of project */}
              </p>
              <Link
                to={`/project/${heroProject._id}`} // Use heroProject instead of project
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    color: "#123456",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  {heroProject.cta} {/* Use heroProject instead of project */}
                </button>
              </Link>
            </div>
            <img
              src={heroProject.image} // Use heroProject instead of project
              alt={heroProject.name} // Use heroProject instead of project
              style={{
                width: "400px",
                height: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
