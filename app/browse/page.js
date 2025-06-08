"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "../nav.js";

import { useState, useEffect } from "react";

const BIKE_DATA = [
        { 
          id: 1,
          image: "/bike-card-0.png",
          title: "Vintage Red Schwinn Bicycle",
          description: "This vintage red Schwinn bicycle features a classic design with a wicker basket on the handlebars, a slightly worn leather seat, and gleaming chrome accents. It is designed for leisure rides and commuting, offering an upright seat for better posture and smooth tires."
        }, 

        { 
          id: 2,
          image: "/bike-card-1.png",
          title: "Sleek Black Mountain Bike",
          description: "This sleek, black mountain bike features bright red accents, knobby tires ready for adventure, gleaming chrome handlebars, and shiny gears ready for action. It is designed for off-road riding, offering better control and comfort on bumpier terrains."
        },
        

        { 
          id: 3,
          image: "/bike-card-2.png",
          title: "Sleek Black Mountain Bike",
          description: "This sleek, black mountain bike features a durable aluminum frame, knobby tires, and disc brakes, ready for a challenging mountain trail. It is designed for off-road riding, offering better control and comfort on bumpier terrains."
        },

        { 
          id: 4,
          image: "/bike-card-3.png",
          title: "Vintage Red Bicycle",
          description: "This vintage, bright red bicycle features a wicker basket on the handlebars and intricate detailing on its frame and tires. It is designed for leisure rides and commuting, offering an upright seat for better posture and smooth tires."
        },
        

        { 
          id: 5,
          image: "/bike-card-4.png",
          title: "Classic Vintage-Style Bicycle",
          description: "This classic, vintage-style bicycle is a bright red color with intricate details of chrome and white accents. It is designed for leisure rides and commuting, offering an upright seat for better posture and smooth tires."
        },
        

        { 
          id: 6,
          image: "/bike-card-5.png",
          title: "Vintage Bicycle",
          description: "This vintage bicycle features a dark green frame with tan leather handlebars and saddle. It has a wicker basket on the handlebars and a bell attached to the frame, evoking a sense of nostalgia and old-world craftsmanship."
        }, 

        { 
          id: 7,
          image: "/bike-card-6.png",
          title: "Vintage Powder-Blue Bicycle",
          description: "This vintage, powder-blue bicycle features a wicker basket on the handlebars and is parked on a cobblestone street. The sunlight casts a warm glow on the scene, illuminating the bicycle's chrome details and the vibrant flowers spilling from the basket."
        }, 

        {
          id: 8,
          image: "/bike-card-7.png",
          title: "Classic Vintage Bicycle",
          description: "This classic, vintage bicycle features a faded, cream-colored paint job and stands against a brick wall, bathed in the warm light of a summer sunset. It includes a wicker basket attached to the handlebars, a comfortable brown leather seat, and old-fashioned mudguards."
        }, 

        {
          id: 9,
          image: "/bike-card-8.png",
          title: "Sleek Modern Road Bike",
          description: "This sleek, modern road bike features a glossy black frame and bright red accents. It is designed for speed and efficiency on paved surfaces, offering a lightweight frame and aerodynamic riding position."
        },
    
        {
          id: 10,
          image: "/bike-card-9.png",
          title: "Classic Blue Bicycle",
          description: "This classic, bright blue bicycle is leaning against a brick wall in a cozy, sun-drenched European alleyway. It features a wicker basket on the handlebars with colorful flowers"
        } 
];

const BuyBikeForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    phone_number: "",
    damage_description: "",
    appointment_date: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const formStateChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="container p-4 rounded" onSubmit={onSubmitHandler}>
      <div className="mb-4">
        <label htmlFor="floatingInput">Email address</label>
        <input type="email" name="email" className="form-control" value={formState.email} onChange={formStateChangeHandler} id="floatingInput" placeholder="name@example.com" required />
      </div>

      <div className="mb-4">
        <label htmlFor="floatingPhoneNumber">Phone number</label>
        <input type="tel" name="phone_number" className="form-control" value={formState.phone_number} onChange={formStateChangeHandler} id="floatingPhoneNumber" placeholder="(123)-456-7890" required />
      </div>

      <div className="mb-4">
        <label htmlFor="DamageDescription" className="form-label">Questions</label>
        <textarea className="form-control" name="damage_description" value={formState.damage_description} onChange={formStateChangeHandler} id="DamageDescription" rows="5" placeholder="Questions you would like answered about the bike."
         required>
        </textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="AppointmentDate" className="form-label">Select the appointment date</label>
        <input type="date" name="appointment_date" className="form-control" value={formState.appointment_date} onChange={formStateChangeHandler} id="AppointmentDate" required/>
      </div>

      <button type="submit" className="btn btn-dark">Book an appointment</button>
    </form>
  );
};

export default function BrowseBikes() {
  const [bikes, setBikes] = useState([]);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  useEffect(() => {
    setBikes(BIKE_DATA);
  }, []);

  const bikeCardClickHandler = (e) => {
    e.target.classList += " invisible";
    setBikes(bikes.filter((bike) => `bike-card-${bike.id}` === e.target.id));
    setShowPurchaseForm(true);
  };

  const backClickHandler = (e) => {
    bikes.forEach((bike) => {
      const button = document.querySelector(`#bike-card-${bike.id}`);
      if (button) {
        button.classList.remove("invisible");
      }
    });
    setBikes(BIKE_DATA);
    setShowPurchaseForm(false);
  };

  return (
    <>
      <NavBar />
      <div className="container py-5">
        {
          !showPurchaseForm && (
            <h2 className="text-center mb-4 fw-bold">Available Bikes</h2>
          )
        }
        {
          showPurchaseForm && (
            <>
              <button onClick={backClickHandler} className="btn btn-secondary mb-4 fw-bold"> <i className="bi bi-arrow-left"></i> back </button>
              <h2 className="text-center mb-4 fw-bold">Talk to an expert before purchasing the bike!</h2>
            </>
          )
        }
        <div className="row">
          {
            bikes.map((bike) => 
              <div className="col-md-3 mb-4" key={bike.id}>
                <div className="card h-100 shadow-sm">
                  <img src={bike.image} className="card-img-top" alt={bike.title} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{bike.title}</h5>
                    <p className="card-text">{bike.description}</p>
                    <div className="mt-auto">
                      <button onClick={bikeCardClickHandler} id={`bike-card-${bike.id}`} className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {
            showPurchaseForm && (
              <div className="col-lg mb-4">
                <div className="card h-100 shadow-sm">
                    <BuyBikeForm />
                </div>
              </div>
            )
          }
        </div>

      </div>
    </>
  );
}

