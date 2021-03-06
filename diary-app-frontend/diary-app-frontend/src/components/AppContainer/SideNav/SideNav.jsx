import { Box, Button } from "@material-ui/core";
import Diary from "./diary/Diary";
import "./SideNav.css";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import DiaryForm from "./diaryForm/DiaryForm";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DiaryDataService from "../../service/DiaryDataService";
import { withRouter } from "react-router-dom";

function SideNav(props) {
  const [clickedNewDiary, setClickedNewDiary] = useState(false);
  const [userDiaries, setUserDiaries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //await means to wait for response to comeback before doing something.
      const request = await DiaryDataService.getDiariesByUsername();
      setUserDiaries(request.data);
      return request;
    }
    fetchData();
  }, []);

  function handleNewDiaryClick() {
    setClickedNewDiary(true);
  }

  function handleCloseModal() {
    setClickedNewDiary(false);
  }

  return (
    <nav id="mySideNav" className="sideNav">
      <img
        className="profile_img"
        src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
      />
      <p>{props.firstName}</p>
      <div className="nav_divider_top"></div>
      <Box textAlign="center" mt={2}>
        <Button
          size="small"
          variant="contained"
          onClick={() => handleNewDiaryClick()}
          startIcon={<CloudUploadIcon />}
        >
          Add Diary
        </Button>
      </Box>
      {userDiaries.map((diary) => (
        <Diary
          key={diary.id}
          name={diary.name}
          color={diary.color}
          id={diary.id}
        />
      ))}

      <Modal
        className="Modal"
        isOpen={clickedNewDiary}
        onRequestClose={() => setClickedNewDiary(false)}
        style={{
          overlay: {
            backgroundColor: "white",
            background: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <DiaryForm closeModal={handleCloseModal} />
      </Modal>
    </nav>
  );
}

export default withRouter(SideNav);
