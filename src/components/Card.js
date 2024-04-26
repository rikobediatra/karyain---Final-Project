import React from "react";

function BaseCard(props) {
  return (
    <div style={{ padding: 30 }}>
      <h1>Popular Project</h1>
      <p>List Of Students Popular Project</p>
      <div>
        <div>
          {Array(6)
            .fill(1)
            .map((_, i) => {
              return (
                <div
                  style={{
                    width: `${100 / props.visible}%`,
                    display: "inline-block",
                    position: "relative",
                    paddingBottom: props.stack ? 12 : 0
                  }}
                  key={i}
                >
                  <div
                    style={{
                      paddingRight: props.spacing,
                      paddingLeft: props.spacing,
                      height: "100%",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        paddingTop: `${100 * props.ratio}%`,
                        position: "relative"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0
                        }}
                        children={props.children}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div style={{ background: props.color, width: "100%", height: "100%" }} />
  );
}

function App() {
  return (
    <div className="App">
      <BaseCard
        stack={true}
        visible={3}
        spacing={10}
        ratio={0.800}
        children={<Box color="white"/>}

      />
    </div>
  );
}

export default App;