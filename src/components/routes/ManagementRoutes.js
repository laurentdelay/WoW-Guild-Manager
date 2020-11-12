import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import CharacterCard from "@components/gestion/CharacterCard";
import GroupEditor from "@components/gestion/GroupEditor";
import CharacterAltsEditor from "@components/gestion/CharacterAltsEditor";

export default function ManagementRoutes({ lastClicked, onCharacterClick }) {
  const { path } = useRouteMatch();

  return (
    <Switch className="pl-0 d-flex justify-content-center">
      <Route exact path={`${path}`}>
        <Redirect to={`${path}/browse`} />
      </Route>
      <Route exact path={`${path}/browse`}>
        <CharacterCard
          lastCharacter={lastClicked}
          onCharacterClick={onCharacterClick}
        />
      </Route>
      <Route path={`${path}/edit-character/:characterId`}>
        <CharacterAltsEditor
          lastCharacter={lastClicked}
          setLastCharacter={onCharacterClick}
        />
      </Route>
      <Route path={`${path}/groups`}>
        <GroupEditor />
      </Route>
    </Switch>
  );
}
