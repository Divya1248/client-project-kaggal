// import React, { useState } from "react";

// const Datalist = () => {
//   let [state, setstate] = useState("");
//   let array = ["chennai", "andhra", "bangalore"];
//   let filtered = array.filter((value, index) => {
//     console.log(state);
//     if (value.toLowerCase(state)) {
//       return value;
//     }
//   });
//   return (
//     <>
//       <input type="text" list="list" onChange={e => setstate(e.target.value)} />
//       divya
//       <datalist id="list">
//         {filtered.map((value, index) => {
//           return <option>{value}</option>;
//         })}
//       </datalist>
//     </>
//   );
// };

// export default Datalist;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// const datalist = () => {
//   let id = useParams();
//   let [state, setstate] = useState(false);

//   let handleChange = e => {
//     const target = e.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;

//     setstate({
//       [id]: value,
//     });
//     console.log(value);
//   };

//   let handleFile = e => {
//     const target = e.target;
//     const values = target.type === "file" ? target.value : display="none";
//     console.log(values);
//   };

//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(state);
//   };
//   return (
//     <div>
//       <input type="file" id="file" onChange={handleFile} />
//       <span>
//         <input type="checkbox" onChange={handleChange} />
//       </span>
//       <input type="file" id="file" onChange={handleFile} />
//       <span>
//         <input type="checkbox" onChange={handleChange} />
//       </span>
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   );
// };

// export default datalist;
