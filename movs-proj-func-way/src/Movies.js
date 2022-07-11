import React from "react";
import Movie from "./Movie";
import AddMov from "./AddMov";
import Favorite from "./FavoriteMovie";
import UpdatePage from "./Updatepage";
import Details from "./Details";

export default function Movies() {
  const [state, setState] = React.useState({
    movies: [
      { id: 1, name: "LoveIsBlind", rating: "5", type: "Romantic", dName: "faranj", rYear: 2021, discription: "oso waal hin beekin waal jalachu" },
      { id: 2, name: "SpiderMan", rating: "4.7", type: "Power", dName: "sarariti", rYear: 1995, discription: "power of spider man flying" },
      { id: 3, name: "Scream", rating: "4.3", type: "Horror", dName: "toshitu", rYear: 1891, discription: "tosha namoota kan argisisu" }
    ]
  });
  const [newD, setNewD] = React.useState({ name: " ", rating: " ", type: " " });
  const [favorM, setFavorM] = React.useState([]);
  const [showUpdate, setShowUpdate] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const [updateMv, setUpdateMv] = React.useState({ name: " ", rating: " ", type: " " });
  const [detailsMv, setDetailsMv] = React.useState({ name: " ", rating: " ", type: " ", dName: "", discription: "" });

  //!Details Method Button take to other page
  let DetailsMtd = (name) => {
    setShowDetails(!showDetails);
    let result = state.movies.find((m) => m.name === name);

    setDetailsMv(result);
  };

  //!Update Method Button take to other page
  let updateMtd = (name) => {
    setShowUpdate(!showUpdate);
    let result = state.movies.find((m) => m.name === name);

    setUpdateMv(result);
  };

  //!Update Method of name,rate and type Down👇
  let updateNameMtd = (newVal) => {
    let copy = { ...updateMv };
    copy.name = newVal.target.value;

    setUpdateMv(copy);
  };

  let updateRateMtd = (newVal) => {
    let copy = { ...updateMv };
    copy.rating = newVal.target.value;

    setUpdateMv(copy);
  };

  let updateTypeMtd = (newVal) => {
    let copy = { ...updateMv };
    copy.type = newVal.target.value;

    setUpdateMv(copy);
  };

  //! Apply Method
  let applyMtd = (name) => {
    let result = state.movies.filter((m) => {
      return m.name !== name;
    });
    result.push(updateMv);
    setState({ movies: result });
  };

  //!Add Method
  let addNameMtd = (e) => {
    setNewD({ name: e.target.value, rating: newD.rating, type: newD.type });
  };

  let addRatingMtd = (e) => {
    setNewD({ name: newD.name, rating: e.target.value, type: newD.type });
  };

  let addTypeMtd = (e) => {
    setNewD({ name: newD.name, rating: newD.rating, type: e.target.value });
  };

  //! save Method
  let saveNewMv = () => {
    setState({ movies: state.movies.concat(newD) });
  };

  //!Delete Method
  let deleteMtd = (idx) => {
    let result = state.movies.filter((m) => {
      return m.id !== idx;
    });
    setState({ movies: result });
  };

  //! Add to Favorite Method
  let addtoFavrMtd = (name) => {
    let result = state.movies.filter((m) => {
      if (m.name === name) {
        console.log(m);
        return m;
      }
    });
    setFavorM(favorM.concat(result));
  };

  //! Remove from Favorite Method
  let removeFavorMtd = (name) => {
    let result = favorM.filter((m) => {
      return m.name !== name;
    });
    setFavorM(result);
  };

  return (
    <div className="App">
      <h2>List of movies</h2>
      {state.movies.map((m) => (
        <Movie
          key={m.id}
          name={m.name}
          rating={m.rating}
          type={m.type}
          addtoFavrMtd={() => {
            addtoFavrMtd(m.name);
          }}
          deleteMtd={() => {
            deleteMtd(m.id);
          }}
          updateMtd={() => {
            updateMtd(m.name);
          }}
          detailsMtd={() => {
            DetailsMtd(m.name);
          }}
        ></Movie>
      ))}
      <AddMov
        addNameMtd={(e) => {
          addNameMtd(e);
        }}
        addRatingMtd={(e) => {
          addRatingMtd(e);
        }}
        addTypeMtd={(e) => {
          addTypeMtd(e);
        }}
        saveData={() => {
          saveNewMv();
        }}
      ></AddMov>
      <h2>Favorite page</h2>
      {favorM.map((m) => (
        <Favorite
          name={m.name}
          rating={m.rating}
          type={m.type}
          removeFavorMtd={() => {
            removeFavorMtd(m.name);
          }}
        ></Favorite>
      ))}

      <h2>Update page!</h2>
      {showUpdate ? (
        <UpdatePage
          name={updateMv.name}
          rating={updateMv.rating}
          type={updateMv.type}
          updateNameMtd={(e) => {
            updateNameMtd(e);
          }}
          updateRateMtd={(e) => {
            updateRateMtd(e);
          }}
          updateTypeMtd={(e) => {
            updateTypeMtd(e);
          }}
          applyMtd={() => {
            applyMtd();
          }}
        />
      ) : null}
      <h2>Details page!</h2>
      {showDetails ? (
        <Details
          name={detailsMv.name}
          rating={detailsMv.rating}
          type={detailsMv.type}
          dName={detailsMv.dName}
          rYear={detailsMv.rYear}
          discription={detailsMv.discription}
        />
      ) : null}
    </div>
  );
}
