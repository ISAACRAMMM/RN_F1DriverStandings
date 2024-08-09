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

export async function  getDriverDetailsData(driverId) {
  const url = `http://ergast.com/api/f1/drivers/${driverId}/driverStandings.json`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Extraer los datos de interés
      const standingsLists = data.MRData.StandingsTable.StandingsLists;

      // Mapea los datos para obtener solo la información necesaria por temporada
      const driverStandingsByYear = standingsLists.map((standing) => {
          return {
              season: standing.season,
              position: standing.DriverStandings[0].position,
              points: standing.DriverStandings[0].points,
              wins: standing.DriverStandings[0].wins,
              constructor: standing.DriverStandings[0].Constructors[0].name
          };
      });

      return driverStandingsByYear;

  } catch (error) {
      console.error('Error fetching data:', error);
  }
}




