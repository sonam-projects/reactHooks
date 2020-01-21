import React, { useContext } from "react";
import "./styles.css";
const MyContext = React.createContext();

const Input = () => {
  const changeFirstName = e => {
    console.log(e);
  };
  const contextData = useContext(MyContext);
  const {
    user: { firstName, lastName }
  } = contextData;
  return (
    <div>
      <h5>{firstName + " " + lastName}</h5>
      <input
        onChange={e => {
          changeFirstName = e.target.value;
        }}
      />
    </div>
  );
};
const FormInput = () => {
  return (
    <div>
      <Input />
    </div>
  );
};
class App extends React.Component {
  state = {
    user: { firstName: "Sonam", lastName: "Deolalikar" },
    age: 26,
    height: 154
  };
  render() {
    const changeFirstName = () => {
      this.setState({ [this.state.user.firstName]: "Sudhir" });
    };
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <MyContext.Provider value={{ changeFirstName, ...this.state }}>
          <FormInput />
        </MyContext.Provider>
      </div>
    );
  }
}
export default App;
