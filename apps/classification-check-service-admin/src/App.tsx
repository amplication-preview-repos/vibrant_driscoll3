import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClassificationList } from "./classification/ClassificationList";
import { ClassificationCreate } from "./classification/ClassificationCreate";
import { ClassificationEdit } from "./classification/ClassificationEdit";
import { ClassificationShow } from "./classification/ClassificationShow";
import { CheckResultList } from "./checkResult/CheckResultList";
import { CheckResultCreate } from "./checkResult/CheckResultCreate";
import { CheckResultEdit } from "./checkResult/CheckResultEdit";
import { CheckResultShow } from "./checkResult/CheckResultShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ClassificationCheckService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Classification"
          list={ClassificationList}
          edit={ClassificationEdit}
          create={ClassificationCreate}
          show={ClassificationShow}
        />
        <Resource
          name="CheckResult"
          list={CheckResultList}
          edit={CheckResultEdit}
          create={CheckResultCreate}
          show={CheckResultShow}
        />
      </Admin>
    </div>
  );
};

export default App;
