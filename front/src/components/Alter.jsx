import Alert from "react-bootstrap/Alert";
import CloseButton from "react-bootstrap/CloseButton";

function MyAlert(props) {
  return (
    <>
      <Alert show={props.show} variant="info"  style={{
        margin:"20px"
      }}>
        <div style={{display:'flex', justifyContent:"space-between"}}>
          <Alert.Heading>Added</Alert.Heading>
          <CloseButton  onClick={() => props.setShow(false)} />
        </div>
        <p>Product added successfully.</p>
      </Alert>
    </>
  );
}

export default MyAlert;
