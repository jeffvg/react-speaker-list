import { useContext } from "react";
import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestRest, { REQUEST_STATUS } from "../hooks/useRequestRest";
import { data } from '../../SpeakerData';
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";
import { SpeakerContext } from "../contexts/SpeakerContext";

function SpeakersList() {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();
  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        Error: <b>loading speaker data failed {error}</b>
      </div>
    )
  }

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
      type="media"
      rows={15}
      className="speakerslist-placeholder"
      ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
      <div className="row">
        {speakersData
        .filter(function (speaker) {
          return (
            speaker.first.toLowerCase().includes(searchQuery) ||
            speaker.last.toLowerCase().includes(searchQuery)
          );
        })
        .filter(function (speaker) {
          return speaker.sessions.find((session) => {
            return session.eventYear === eventYear;
          });
        })
        .map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              updateRecord={updateRecord}
              insertRecord={insertRecord}
              deleteRecord={deleteRecord}
            />
          );
        })}
      </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
