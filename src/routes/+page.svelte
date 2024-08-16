<script>
	let questions = [
		{
			question: 'What South American country is this?',
			image: 'colombianPlates.png',
			mapLink:
				'https://www.google.com/maps/@4.7108656,-74.0725735,3a,40.2y,77.56h,83.66t/data=!3m6!1e1!3m4!1sMEzANw6rAHvCNpfyHxzNgA!2e0!7i16384!8i8192?coh=205409&entry=ttu',
			answer: 'Colombia',
			possibleAnswers: ['Brazil', 'Peru', 'Ecuador', 'Chile', 'Argentina', 'Colombia', 'Uruguay']
		},
		{
			question: 'What South American country is this?',
			image: 'colombianTaxis.png',
			mapLink:
				'https://www.google.com/maps/@4.7114545,-74.0705483,3a,32.8y,20.6h,87.09t/data=!3m6!1e1!3m4!1s0XI6LquOpGCo4vinBqGRpw!2e0!7i16384!8i8192?coh=205409&entry=ttu',
			answer: 'Colombia',
			possibleAnswers: ['Brazil', 'Peru', 'Colombia', 'Ecuador', 'Chile', 'Argentina', 'Uruguay']
		},
		{
			question: 'What American country is this?',
			image: 'cdmxTaxis.png',
			mapLink:
				'https://www.google.co.uk/maps/@19.4257497,-99.1537539,3a,75y,204.14h,72.64t/data=!3m7!1e1!3m5!1s86EzlL673cM-2JypBMpHwA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D17.358171932485106%26panoid%3D86EzlL673cM-2JypBMpHwA%26yaw%3D204.1440908703972!7i16384!8i8192?coh=205410&entry=ttu',
			answer: 'Mexico',
			possibleAnswers: [
				'Canada',
				'USA',
				'Brazil',
				'Peru',
				'Mexico',
				'Ecuador',
				'Chile',
				'Argentina',
				'Uruguay'
			]
		}
	];

	let currentQuestion = $state(Math.floor(Math.random() * questions.length));
	let answerSelected = $state(-1);

	function goToNextQuestion() {
		answerSelected = -1;
		currentQuestion++;
		if (currentQuestion > questions.length - 1) {
			currentQuestion = 0;
		}
	}

	function goToRandomNewQuestion() {
		answerSelected = -1;
		const nextQuestion = Math.floor(Math.random() * questions.length);

		// TODO Fix this recursion
		if (nextQuestion === currentQuestion) {
			goToRandomNewQuestion();
		} else {
			currentQuestion = nextQuestion;
		}
	}
</script>

<h1>GeoLearnr</h1>
<h3>
	{questions[currentQuestion].question}
	(<a href={questions[currentQuestion].mapLink} target="_blank">Link</a>)
</h3>

<div id="answerButtonContainer">
	{#each questions[currentQuestion].possibleAnswers as possibleAnswer, i}
		<button
			class:correct={answerSelected !== -1 && possibleAnswer === questions[currentQuestion].answer}
			class:wrong={answerSelected === i}
			onclick={() => (answerSelected = i)}>{possibleAnswer}</button
		>
	{/each}
</div>
<img src={questions[currentQuestion].image} alt="quiz question" />
<div id="newQuestionContainer">
	<button onclick={goToNextQuestion}>Next question</button>
	<button onclick={goToRandomNewQuestion}>Random new question</button>
</div>

<style>
	img {
		display: block;
		max-height: 70vh;
		margin: 0 auto;
		border-radius: 1rem;
		max-width: 100%;
	}

	h1,
	h3 {
		text-align: center;
	}

	#answerButtonContainer,
	#newQuestionContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 1rem;
	}

	button {
		padding: 0.5rem 1rem;
		font-weight: bold;
		font-size: 1.25rem;
		border: 1px solid rgb(82, 82, 82);
		border-radius: 2rem;
	}

	.wrong {
		background-color: red;
	}

	.correct {
		background-color: green;
	}
</style>
