import React from 'react';
import { shuffle } from '../helpers/array';

const TeamsCompleted = ({ user_by_team, users }) => {
  const shuffledUsers = shuffle(users);
  const teams = shuffledUsers.reduce((acc, user, i) => {
    const newTeam = (i % user_by_team) === 0;
    const totalTeams = acc.length;

    if (newTeam) {
      acc.push([user]);
    } else {
      acc[totalTeams - 1].push(user);
    }

    return acc;
  }, []);

  return [
    <h3 key="heading">
      Teams
    </h3>,

    <div key="teams">
      { teams.map((team, i) => (
        <div key={i} className="Team">
          <h4>Team {i + 1}</h4>

          <ul>
            { team.map((user, j) => (
              <li key={j}>{user}</li>
            ))}
          </ul>
        </div>
      )) }
    </div>,
  ];
};

export default TeamsCompleted;
