import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EmpEdit = () => {

  const { empid } = useParams()
  // const [empData, setEmpData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
         setIdChange(resp.id)
         setNameChange(resp.name)
         setEmailChange(resp.email)
         setPhoneChnage(resp.phone)
         setActiveChange(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  const [id, setIdChange] = useState("");
  const [name, setNameChange] = useState("");
  const [email, setEmailChange] = useState("");
  const [phone, setPhoneChnage] = useState("");
  const [active, setActiveChange] = useState(true);
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log({id, name, email, phone, active})

    const empData = { id, name, email, phone, active };
    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert("Saved successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h2>employee Edit</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      value={id}
                      disabled="disabled"
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input required
                      value={name} 
                      onMouseDown={e => setValidation(true)}
                      onChange={(e) => setNameChange(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                    { name.length === 0 && validation && <span className="text-danger mb-1">Enter ur name!</span> }
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmailChange(e.target.value)}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhoneChnage(e.target.value)}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-check">
                    <input
                      checked={active}
                      onChange={(e) => setActiveChange(e.target.checked)}
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Is Active</label>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-success m-2">
                      Save
                    </button>
                    <Link className="btn btn-danger" to="/">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}


export default EmpEdit;