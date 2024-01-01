import React, { useState } from "react";
import styles from "../styles/pages/Map.module.css";
import BasicMap from "../components/BasicMap";
import LeftNavbar from "../components/LeftNavbar";
import { AcademyType } from "../App";
import Header from "../components/Header";
import Detail from "../components/Detail";
import BottomNavbar from "../components/BottomNavbar";

const Map = (props: { academyList: AcademyType[], location: string, setLocation: any }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [academyName, setAcademyName] = useState<string>("name");
  const [academyAddress, setAcademyAddress] = useState<string>("address");
  const [academyId, setAcademyId] = useState<number>(1);
  const [academyTags, setAcademyTags] = useState<string[]>([]);
  const [adr1, setAdr1] = useState<string>('경북');
  const [adr2, setAdr2] = useState<string>('의성군');
  const [nowState, setNowState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
    isPanto: true,
  })

  const toggleContainer = (id: number, name: string, address: string, tag: string[]) => {
    setAcademyName(name);
    setAcademyAddress(address);
    setAcademyId(id);
    setAcademyTags(tag)
  };

  return (
    <>
      <Header location={props.location} />
      <div className={styles.map}>
        <BasicMap
          list={props.academyList}
          setShowDetail={setShowDetail}
          toggleContainer={toggleContainer}
          nowState={nowState}
          setNowState={setNowState}
          setLocation={props.setLocation}
          setAdr1={setAdr1}
          setAdr2={setAdr2}
        />
      </div>
      <BottomNavbar />
      <LeftNavbar
        list={props.academyList}
        setShowDetail={setShowDetail}
        toggleContainer={toggleContainer}
        nowState={props.location}
        setNowState={setNowState}
        adr1={adr1}
        adr2={adr2}
      />
      {showDetail && (
        <Detail
          name={academyName}
          address={academyAddress}
          id={academyId}
          tag={academyTags}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
};

export default Map;
