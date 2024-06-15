import React, { useState, useRef, useEffect } from "react";
import ModalUi from "../../primitives/ModalUi";
import RecipientList from "./RecipientList";
import { useDrag } from "react-dnd";
import WidgetList from "./WidgetList";
import {
  radioButtonWidget,
  textInputWidget,
  textWidget,
  widgets
} from "../../constant/Utils";
function WidgetComponent({
  dragSignature,
  signRef,
  handleDivClick,
  handleMouseLeave,
  dragStamp,
  isSignYourself,
  addPositionOfSignature,
  signersdata,
  isSelectListId,
  setSignerObjId,
  setIsSelectId,
  setContractName,
  isSigners,
  dataTut,
  isMailSend,
  handleAddSigner,
  setUniqueId,
  setRoleName,
  handleDeleteUser,
  signerPos,
  handleRoleChange,
  handleOnBlur,
  title,
  setSignersData,
  sendInOrder,
  isTemplateFlow,
  setBlockColor,
  blockColor,
  setIsAddSigner
}) {
  const [isSignersModal, setIsSignersModal] = useState(false);

  const [, dropdown] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 5,
      text: "dropdown"
    },

    collect: (monitor) => ({
      isDragDropdown: !!monitor.isDragging()
    })
  });
  const [, checkbox] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 6,
      text: "checkbox"
    },

    collect: (monitor) => ({
      isDragCheck: !!monitor.isDragging()
    })
  });
  const [, textInput] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 7,
      text: textInputWidget
    },
    collect: (monitor) => ({
      isDragTextInput: !!monitor.isDragging()
    })
  });
  const [, initials] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 8,
      text: "initials"
    },

    collect: (monitor) => ({
      isDragInitial: !!monitor.isDragging()
    })
  });
  const [, name] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 9,
      text: "name"
    },

    collect: (monitor) => ({
      isDragName: !!monitor.isDragging()
    })
  });
  const [, company] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 10,
      text: "company"
    },

    collect: (monitor) => ({
      isDragCompany: !!monitor.isDragging()
    })
  });
  const [, jobTitle] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 11,
      text: "job title"
    },

    collect: (monitor) => ({
      isDragJobtitle: !!monitor.isDragging()
    })
  });
  const [, date] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 12,
      text: "date"
    },

    collect: (monitor) => ({
      isDragDate: !!monitor.isDragging()
    })
  });
  const [, image] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 13,
      text: "image"
    },

    collect: (monitor) => ({
      isDragImage: !!monitor.isDragging()
    })
  });
  const [, email] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 14,
      text: "email"
    },
    collect: (monitor) => ({
      isDragEmail: !!monitor.isDragging()
    })
  });
  const [, radioButton] = useDrag({
    type: "BOX",

    item: {
      type: "BOX",
      id: 15,
      text: radioButtonWidget
    },
    collect: (monitor) => ({
      isDragRadiotton: !!monitor.isDragging()
    })
  });
  const [, text] = useDrag({
    type: "BOX",

    item: {
      type: "BOX",
      id: 16,
      text: textWidget
    },
    collect: (monitor) => ({
      isDragText: !!monitor.isDragging()
    })
  });
  const isMobile = window.innerWidth < 767;
  const scrollContainerRef = useRef(null);
  const [widget, setWidget] = useState([]);

  const color = [
    "#93a3db",
    "#e6c3db",
    "#c0e3bc",
    "#bce3db",
    "#b8ccdb",
    "#ceb8db",
    "#ffccff",
    "#99ffcc",
    "#cc99ff",
    "#ffcc99",
    "#66ccff",
    "#ffffcc"
  ];
  const handleModal = () => {
    setIsSignersModal(!isSignersModal);
  };

  useEffect(() => {
    const widgetRef = [
      dragSignature,
      dragStamp,
      initials,
      name,
      jobTitle,
      company,
      date,
      text,
      textInput,
      checkbox,
      dropdown,
      radioButton,
      image,
      email
    ];
    const getWidgetArray = widgets;
    const newUpdateSigner = getWidgetArray.map((obj, ind) => {
      return { ...obj, ref: widgetRef[ind] };
    });

    setWidget(newUpdateSigner);
    // eslint-disable-next-line
  }, []);

  const filterWidgets = widget.filter(
    (data) =>
      data.type !== "dropdown" &&
      data.type !== radioButtonWidget &&
      data.type !== textInputWidget
  );
  const textWidgetData = widget.filter((data) => data.type !== textWidget);
  const updateWidgets = isSignYourself
    ? filterWidgets
    : isTemplateFlow
      ? textWidgetData
      : widget;

  return (
    <>
      {isMobile ? (
        !isMailSend && (
          <div
            data-tut={dataTut}
            id="navbar"
            className="stickyfooter"
            style={{ width: window.innerWidth + "px" }}
          >
            <div className="mx-1">
              {isSigners && (
                <div
                  data-tut={dataTut}
                  className="py-[10px] flex justify-center items-center op-card"
                  style={{
                    background: blockColor
                      ? blockColor
                      : isSelectListId
                        ? color[isSelectListId % color.length]
                        : color[0]
                  }}
                  onClick={() => handleModal()}
                >
                  <span className="text-[13px] font-bold flex items-center">
                    {title ? title : "Recipient"}
                    {signersdata[isSelectListId]?.Role && (
                      <div>
                        {signersdata[isSelectListId]?.Name ? (
                          <>
                            :{" "}
                            {signersdata[isSelectListId]?.Name?.length > 12
                              ? `${signersdata[isSelectListId].Name.slice(
                                  0,
                                  12
                                )}...`
                              : signersdata[isSelectListId]?.Name}
                          </>
                        ) : (
                          <>
                            :{" "}
                            {signersdata[isSelectListId]?.Role?.length > 12
                              ? `${signersdata[isSelectListId].Role.slice(
                                  0,
                                  12
                                )}...`
                              : signersdata[isSelectListId]?.Role}
                          </>
                        )}
                      </div>
                    )}
                    <div className="ml-[6px] text-[16px]">
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </span>
                </div>
              )}
            </div>
            <div className="mx-1">
              {handleAddSigner ? (
                <div
                  data-tut="reactourAddbtn"
                  className="op-btn op-btn-accent w-full my-[2px]"
                  onClick={() => handleAddSigner()}
                >
                  <i className="fa-solid fa-plus"></i>
                  <span>Add role</span>
                </div>
              ) : (
                setIsAddSigner && (
                  <div
                    data-tut="reactourAddbtn"
                    className="op-btn op-btn-accent w-full my-[2px]"
                    onClick={() => setIsAddSigner(true)}
                  >
                    <i className="fa-solid fa-plus"></i>
                    <span>Add recipients</span>
                  </div>
                )
              )}
            </div>
            <div
              ref={scrollContainerRef}
              className="bg-base-100 border-[2px] border-t-primary"
            >
              <div className="flex whitespace-nowrap overflow-x-scroll pt-[10px] pb-[5px] pr-[5px]">
                <WidgetList
                  updateWidgets={updateWidgets}
                  handleDivClick={handleDivClick}
                  handleMouseLeave={handleMouseLeave}
                  signRef={signRef}
                  marginLeft={5}
                  addPositionOfSignature={addPositionOfSignature}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </div>
        )
      ) : (
        <div
          data-tut={dataTut}
          className={`${
            isMailSend ? "bg-opacity-50 pointer-events-none" : ""
          } hidden md:block w-[180px] h-full bg-base-100`}
        >
          <div className="mx-2 pr-2 pt-2 pb-1 text-[15px] text-base-content font-semibold border-b-[1px] border-base-300">
            <span>Fields</span>
          </div>
          <div className="flex flex-col items-center my-3">
            <WidgetList
              updateWidgets={updateWidgets}
              handleDivClick={handleDivClick}
              handleMouseLeave={handleMouseLeave}
              signRef={signRef}
            />
          </div>
        </div>
      )}
      {isSignersModal && (
        <ModalUi
          title={title ? title : "Recipients"}
          isOpen={isSignersModal}
          handleClose={handleModal}
        >
          {signersdata.length > 0 ? (
            <div className="max-h-[600px] overflow-auto pb-1">
              <RecipientList
                signerPos={signerPos}
                signersdata={signersdata}
                isSelectListId={isSelectListId}
                setSignerObjId={setSignerObjId}
                setIsSelectId={setIsSelectId}
                setContractName={setContractName}
                setUniqueId={setUniqueId}
                setRoleName={setRoleName}
                handleDeleteUser={handleDeleteUser}
                handleRoleChange={handleRoleChange}
                handleOnBlur={handleOnBlur}
                handleModal={handleModal}
                sendInOrder={sendInOrder}
                setSignersData={setSignersData}
                setBlockColor={setBlockColor}
              />
            </div>
          ) : (
            <div className=" p-[20px] text-[15px] font-medium text-center">
              Please add a {title ? title : "recipients"}
            </div>
          )}
        </ModalUi>
      )}
    </>
  );
}

export default WidgetComponent;
