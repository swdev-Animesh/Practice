import "./General.css";

function General(props) {
  const classes = "general " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default General;
