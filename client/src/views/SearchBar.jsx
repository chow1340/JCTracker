import React, {Component} from 'react';
import axios from 'axios'
import AutoSuggest from 'react-autosuggest'
import { Link, Route } from 'react-router-dom';
import PlayerCard from '../components/GameCard/PlayerCard'
import { tsObjectKeyword } from '@babel/types';

// --- AUTOSUGGEST FUNCTIONS

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
function getSuggestions(value, players, teams) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }
  

  //Change players teamID to the actual team name
  players.map(players => teams.find(teams => {
    if (teams.teamId === players.teamId) {
      players.teamId = teams.fullName
    } 
  }))

  const regex = new RegExp('\\b' + escapedValue, 'i');
  
  return players.filter(person => regex.test(getSuggestionValue(person, teams, players)));
}
  
function getSuggestionValue(suggestion) {
  return `${suggestion.firstName} ${suggestion.lastName} `;
}
  
function renderSuggestion(suggestion, { query }) {
  return (
      <div>{suggestion.firstName} {' '} {suggestion.lastName} {' '} <p>{suggestion.teamId}</p> </div>
  );
};

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            teams: [],
            chosenPlayer: '',
            value: '',
            suggestions: [],
            submitted: false,
            firstName: '',
            lastName: '',
            playerTeam: '',
            statDisplay: 'none',
            pastFiveGames: [],
            pastFiveGamesSuggestion: [],
            player: [],
            searchDisplay: 'none',
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
   
    onChange = (event, { newValue, method }) => {
        this.setState({
          value: newValue
        });
      };
      

      onSuggestionsFetchRequested = ({ value }) => {
        const players = this.state.players
        const teams = this.state.teams
        const playersFiltered = players.filter(player => player.teamId != null)
        this.setState({
          suggestions: getSuggestions(value, playersFiltered, teams)
        });
      };
    
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };

      onSuggestionSelected = (event, {suggestion}) => {
        this.setState({
          chosenPlayer: suggestion.playerId,
          player: suggestion,
        })
        //---GET STATISTICS OF THE PLAYER
        axios({
          "method":"GET",
          "url":"https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/" + suggestion.playerId,
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
          "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
          }
          })
          .then((response) => 
            {
              const pastFiveGames = response.data.api.statistics.slice(-5).reverse();
              const gameStatisticArray = [];
              pastFiveGames.map(games =>
                  axios({
                    "method":"GET",
                    "url":"https://api-nba-v1.p.rapidapi.com/games/gameId/" + games.gameId,
                    "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
                    }
                    })
                    .then((response) => 
                      {
                        // --- Create an array for the statistics of each game
                        const gameStatistic = response.data.api.games[0];
                        gameStatisticArray.push(gameStatistic)

                        //---Combine the two arrays for each object into pastFiveGames
                        gameStatisticArray.find(gameInfo => {
                          if(gameInfo.gameId === games.gameId) {
                            games.vTeamName = gameInfo.vTeam.fullName;
                            games.hTeamName = gameInfo.hTeam.fullName;
                            games.vTeamLogo = gameInfo.vTeam.logo;
                            games.hTeamLogo = gameInfo.hTeam.logo;
                            games.vTeamScore = gameInfo.vTeam.score;
                            games.hTeamScore = gameInfo.hTeam.score;
                            games.statusGame = gameInfo.statusGame;
                            games.startTimeUTC = gameInfo.startTimeUTC;
                          }
                        })
                      },
                      
                    )
                    .catch((error)=>{
                        console.log(error)
                  })
                )
  
              this.setState({
                pastFiveGamesSuggestion: pastFiveGames
              })
            }

          ) 
        .catch((error)=>{
            console.log(error)
        })
      }

    componentDidMount() {
      // GET PLAYERS IN THE LEAGUE
      axios({
        "method":"GET",
        "url":"https://api-nba-v1.p.rapidapi.com/players/league/standard",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
        }
        })
        .then((response) => 
          this.setState({
          players: response.data.api.players
          })
        ) 
        .catch((error)=>{
            console.log(error)
      })

      // GET TEAMS IN NBA
      .then(axios({
        "method":"GET",
        "url":"https://api-nba-v1.p.rapidapi.com/teams/league/standard",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
        }
        })
        .then((response)=>{
            this.setState({
              teams: response.data.api.teams
            })
        })
        .catch((error)=>{
            console.log(error)
        }))
        
    }

    onSubmit(e){
      e.preventDefault();
      // --- Set state for player card display
      const player = this.state.player
        if(player && player.length!= 0){
          console.log(player)
          this.setState({
            firstName: player.firstName,
            lastName: player.lastName,
            playerTeam: player.teamId,
            // playerJersey: Object.values(player.leagues)[0].jersey,
            // playerPosition: Object.values(player.leagues)[0].pos,
            playerBirthdate: player.dateOfBirth,
            playerYearsPro: player.yearsPro,
            playerHeight: player.heightInMeters,
            playerWeight: player.weightInKilograms,
            statDisplay: 'block',
            pastFiveGames: this.state.pastFiveGamesSuggestion,
            searchDisplay:'none',
          })
        } else {
          setTimeout(null, 250)
        }
        if (player.length == 0){
          this.setState({
            searchDisplay: 'block'
          })
        }

      // console.log(sessionStorage.getItem('user'));
      // const username = sessionStorage.getItem('user');
     
      
      // --- Add user to tracked player database
      // axios.post('/api/users/update/players', username, playerId)
      // .then(res => console.log(res.data), console.log('test'));
    }

    render() { 
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search For A Player",
            value,
            onChange: this.onChange,
        }
        const statStyles = {
          display: this.state.statDisplay
        }
        const searchStyles = {
          display: this.state.searchDisplay
        }
        return(
          <div className = 'content'>
            <form onSubmit = {this.onSubmit}>
                <AutoSuggest 
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps} 
                    onSuggestionSelected = {this.onSuggestionSelected}
                    />
                    <button className = "btn btn-outline-secondary" id = 'searchButton'>Search</button>
            </form>
            <br/>
            <div className = 'alert alert-info'id = 'searchWarning' style = {searchStyles}>
              Player does not exist!
            </div>
            <div className = 'playerCard' style = {statStyles}>
              <PlayerCard 
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                playerTeam = {this.state.playerTeam}
                playerJersey = {this.state.playerJersey}
                playerPosition = {this.state.playerPosition}
                playerBirthdate = {this.state.playerBirthdate}
                playerYearsPro = {this.state.playerYearsPro}
                playerHeight = {this.state.playerHeight}
                playerWeight = {this.state.playerWeight}
                pastFiveGames = {this.state.pastFiveGames}
                playerId = {this.state.player.playerId}
              />
            </div>
          </div>
          
        )
    }
}

export default SearchBar