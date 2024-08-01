export async function getDriversData() {
  try {
    const response = await fetch(
      "http://ergast.com/api/f1/current/driverstandings.json"
    );
    const data = await response.json();

    const driverStandings =
      data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    const drivers = driverStandings.map((driverStanding) => {
      const driver = driverStanding.Driver;
      const constructors = driverStanding.Constructors.map(
        (constructor) => constructor.name
      ).join(", ");

      return {
        position: driverStanding.position,
        points: driverStanding.points,
        wins: driverStanding.wins,
        driverId: driver.driverId,
        givenName: driver.givenName,
        familyName: driver.familyName,
        dateOfBirth: driver.dateOfBirth,
        nationality: driver.nationality,
        constructors: constructors,
      };
    });

    return drivers;
  } catch (error) {
    console.error("Error fetching driver data:", error);
  }
}

export async function getDriverDetailsData(driverId) {
    try {
      const response = await fetch(
        `http://ergast.com/api/f1/drivers/${driverid}/driverStandings.json`
      );
      const data = await response.json();
  
      if (data.MRData.StandingsTable.StandingsLists.length > 0) {
        const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
        const driver = standings.Driver;
        const constructors = standings.Constructors.map(constructor => constructor.name).join(', ');
  
        return {
          position: standings.position,
          points: standings.points,
          wins: standings.wins,
          driverId: driver.driverId,
          givenName: driver.givenName,
          familyName: driver.familyName,
          dateOfBirth: driver.dateOfBirth,
          nationality: driver.nationality,
          constructors: constructors
        };
      } else {
        return `No standings found for driver with ID: ${driverId}`;
      }
    } catch (error) {
      console.error('Error fetching driver standings:', error);
      return 'An error occurred while fetching the data.';
    }
      
  }

