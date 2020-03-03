# Carbon12
Repository del `Programma di Addestramento` complementare al plug-in `Predire-in-Grafana-app` incluso nel Proof of Concept realizzato per il progetto **Predire in Grafana - Monitoraggio predittivo per DevOps -** dell'insegnamento Ingegneria del Software dell'Università degli studi di Padova A.A. 2019/2020.

## Scopo 
Il programma di addestramento accompagna il plug-in Predire in Grafana e ha lo scopo di allenare i modelli di machine learning SVM o RL a partire da alcuni dati noti e fornire all'utente il file JSON contenente il predittore allenato. Questo file dovrà essere fornito in input al plug-in in modo che questo possa applicare i giusti calcoli e generare le previsioni corrette rispetto al flusso di dati in monitoraggio. Il programma accetta opzionalmente in ingresso un predittore già allenato nella stessa applicazione per il suo aggiornamento sulla base di nuovi dati disponibili. 

--- 

## Utilizzo 
### Struttura del file .csv con i dati di addestramento
Il `file.csv` nel quale sono presenti i dati di addestramento può essere realizzato a partire dai dati di monitoraggio ottenuti da Grafana oppure costruito dall'utente. 
Per il corretto funzionamento del programma di addestramento il file dovrà: 
1. essere un file con estensione `.csv`
2. presentare la struttura seguente: 

| Time | Source_1 | Source_2  | ... | Labels |
| :--- | :------- | :-------- | :---| :-----:| 
| value| value 	  | value     | ... | value  |

  dove 
  * *Time* è il timestamp di riferimento
    * l'intestazione della colonna **deve** essere rispettata 
  * *Source_n* è il nome della sorgente dati 
    *  il numero di colonne dipende dal numero di sorgenti monitorate e valutate
    *  i nomi verranno inclusi nel predittore allenato
  * *Labels* è la previsione attesa 
    * l'intestazione della colonna **deve** essere rispettata 

In figura viene presentato un esempio del file di addestramento.

![file_csv](https://github.com/alek4k/Carbon12/blob/addestramento/addestramento/img_README/formatoFileCSV.png)

### Struttura del predittore.json
Il file predittore.json avrà una struttura predefinita, tramite la quale sarà possibile la lettura dei risultati nel plug-in di Grafana e il corretto funzionamento delle funzioni di predizione.

La sua struttura è la seguente:
* *header*: contiene le informazioni generali del progetto e di proprietà del predittore;
  * sia il programma di addestramento che il plug-in accetteranno solo predittori creati dal programma di addestramento fornito con il plug-in
* *data-entry*: contiene i nomi delle sorgenti utilizzate per l'addestramento prese dal file `.csv` in ingresso
* *model*: specifica il modello di machine learning addestrato;
* *file-version*: specifica quante volte è stato addestrato il file predittore.json con quelle data-entry;
* *configuration*: contiene i risultati dell'addestramento.

In figura viene presentato un esempio del file di addestramento.

![file_json](https://github.com/alek4k/Carbon12/blob/addestramento/addestramento/img_README/formatoFileJSON.png)


### Avvio del programma
1. Da terminale, posizionarsi nella directory di addestramento in locale:
```
	cd path/addestramento
```
2. Avviare il programma di addestramento utilizzando il comando:
```
	node app.js
```
3. Utilizzando il browser accere all'indirizzo *http://localhost:8080/*;
4. Inserire il file `.csv` con i dati di addestramento;
5. Se si desidera riaddestrare, inserire il vecchio `predittore.json`;
6. Attivare il pulsante *Avvio Addestramento*;
7. Scaricare il nuovo `predittore.json` tramite il pulsante *Download predittore*;
8. Se si vuole addestrare altro premere *Ritorna all'homepage*, oppure proseguire con il plug-in.

--- 

#### Componenti 
| Nome                 | Matricola |
| :--------------------|:---------:| 
| Giacomo Callegari    | 1122658   | 
| Manuel De Franceschi | 1162299   |
| Nicolò Fassina       | 1166190   |
| Francesco Gobbo      | 1120713   | 
| Andrea Longo         | 1174957   |
| Alessandro Lovo      | 1142682   |
| Veronica Pederiva    | 1161493   |
