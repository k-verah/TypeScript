import { Serie } from "./serie.js";

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "https://i.imgur.com/TDCEV1S.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
  ];

export const ap = 
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg")
   
let serieTable: HTMLElement = document.getElementById("serie")!;
let seriesTable: HTMLElement = document.getElementById("series")!;
let temporadasProm: HTMLElement = document.getElementById("tempPro")!;

mostrarDatosSerie(ap);

function mostrarDatosSerie(serie: Serie ):void {
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `
    <tr><td>Numero:</td><td>${serie.numeroSerie}</td></tr>
    <tr><td>Nombre:</td><td>${serie.nombre}</td></tr>
    <tr><td>Programa:</td><td>${serie.programa}</td></tr>
    <tr><td>Temporadas:</td><td>${serie.temporadas}</td></tr>
    <tr><td>Descripcion:</td><td>${serie.descripcion}</td></tr>
    <tr><td>Url:</td><td>${serie.url}</td><tr>
    <tr><td colspan=2><img src="./${serie.avatar}"height="100"></td></tr>`
    serieTable.appendChild(tbodySerie);
}

function mostrarSeries(series: Array<Serie>): void {
    let seriesTBody: HTMLElement = document.createElement("tbody");
    for(let serie of series)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${serie.numeroSerie}</td>
        <td>${serie.nombre}</td>
        <td>${serie.programa}</td>
        <td>${serie.temporadas}</td>`;
        seriesTBody.appendChild(trElement)
    }
    seriesTable.appendChild(seriesTBody)
}

mostrarSeries(series)

function darTemporadasPromedio(series: Array<Serie>): void {
    let promedioTemporadasS:number = 0;
    let numeroTemporadasS:number = 0;
    for(let index = 0; index < series.length; index++)
    {
        let numTemporada = series[index].temporadas
        numeroTemporadasS += numTemporada
    }
    let numeroSeries = series.length
    promedioTemporadasS = numeroTemporadasS/numeroSeries
    
    let h2Element:HTMLElement = document.createElement("h2");
    h2Element.innerHTML=`<h2>Seasons average: ${promedioTemporadasS}</h2>`

    seriesTable.appendChild(h2Element)
}

darTemporadasPromedio(series)