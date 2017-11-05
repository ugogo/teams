import React from 'react';
import PropTypes from 'prop-types';
import { shuffle } from '../helpers/array';

const generateTeams = (by_team, users) => (
  users.reduce((acc, user, i) => {
    const newTeam = (i % by_team) === 0;
    const totalTeams = acc.length;

    if (newTeam) {
      acc.push([user]);
    } else {
      acc[totalTeams - 1].push(user);
    }

    return acc;
  }, [])
);

const TeamsCompleted = ({ formData }) => {
  const { by_team, users } = formData;
  const shuffledUsers = shuffle(users);
  const teams = generateTeams(by_team, shuffledUsers);

  return [
    <h3 key="heading">
      Teams
    </h3>,

    teams.map((team, i) => (
      <div
        key={`team-${i}`}
        className="Team"
      >
        <h4>
          Team {i + 1}
        </h4>

        <ul>
          { team.map((user, j) => (
            <li key={`team-${i}-user-${j}`}>
              { user }
            </li>
          ))}
        </ul>
      </div>
    )),
  ];
};

TeamsCompleted.propTypes = {
  formData: PropTypes.shape({
    users: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
  }).isRequired,
};

export default TeamsCompleted;
