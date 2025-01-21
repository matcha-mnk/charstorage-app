import React from "react";
import { useNavigate } from "react-router-dom";

const TopPage = () => {
  return(
    <div className="top-page">
      <div>
        <div className="one-line">
          <h1 className="logo">Charstorage / きゃすとれーじ</h1>
          <h1>は、</h1>
        </div>
        <h1>キャラクターの書庫のようなWebアプリケーションです。</h1>
        <h3>創作や暇つぶし等にお使いください。</h3>

        <button className="vertical-button" id="start-btn" onClick={() => useNavigate("/storage")}>
          始める
        </button>
        <button className="vertical-button-en" id="start-btn-en" onClick={() => useNavigate("/storage")}>
          start
        </button>
        <button className="vertical-button" id="manual-btn" onClick={() => useNavigate("")}>
          使い方
        </button>
        <button className="vertical-button-en" id="manual-btn-en" onClick={() => useNavigate("/storage")}>
          manual
        </button>
      </div>
    </div>
  );
};

export default TopPage;