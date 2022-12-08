<div class="app light-theme">
	<header>
		<h1>Jake Grella</h1>
	</header>
	<main>
		<div class="content">
			<section class="gray">
				<p>
					// <a href="https://twitter.com/jakegrella" target="_blank" rel="noreferrer"
						>@jakegrella</a
					>,
					<a href="mailto:jake@jakegrella.com" target="_blank" rel="noreferrer"
						>jake@jakegrella.com</a
					>
				</p>
				<p>
					// <a href="https://github.com/jakegrella" target="_blank" rel="noreferrer">GitHub</a>,
					<a href="https://linkedin.com/in/jakegrella" target="_blank" rel="noreferrer">LinkedIn</a>
				</p>
			</section>
			<section>
				<h2>About</h2>
				<p>
					I'm a full stack web engineer with a desire to make a difference through my work. I enjoy
					designing architectures and interfaces, and I take pride in my PRs.
				</p>
			</section>
			<section>
				<h2>Experience</h2>
				<ul>
					<li>
						<p>Software Engineer</p>
						<p>@ Northwestern Mutual (July 2021 - Today)</p>
						<p class="gray">
							Modernizing internal applications utilizing a microservice architecture
						</p>
					</li>
					<li>
						<p>Software Developer</p>
						<p>@ Contract (April 2021 - July 2021)</p>
						<p class="gray">
							Built frontend components used to onboard patients at clinics and practitioner offices
						</p>
					</li>
				</ul>
			</section>
			<section>
				<h2>Projects</h2>
				<ul>
					<li>
						<p>
							Cloud Computing Jobs <span class="gray">// </span>
							<a href="https://cloudcomputingjobs.com" target="_blank" rel="noreferrer">live</a>,
							<a
								href="https://github.com/jakegrella/cloud-computing-jobs"
								target="_blank"
								rel="noreferrer">code</a
							>
						</p>
						<p class="gray">A job board for cloud engineers</p>
					</li>
					<li>
						<p>
							whalewatching.xyz <span class="gray">// </span>
							<a href="https://whalewatching.xyz" target="_blank" rel="noreferrer">live</a>,
							<a
								href="https://github.com/jakegrella/whalewatching.xyz"
								target="_blank"
								rel="noreferrer">code</a
							>
						</p>
						<p class="gray">
							View the largest cryptocurrency transactions from a number of different blockchains
						</p>
					</li>
				</ul>
			</section>
			<section>
				<h2>Skills</h2>
				<p>AWS, React, JavaScript, SCSS, HTML</p>
				<p>Node.js, TypeScript, REST, Prisma</p>
				<p>Product Design, Branding, UI/UX</p>
			</section>
		</div>
	</main>
</div>

<style>
	:global(body) {
		background-color: #f6f0dd;
	}

	.app {
		margin: 0 auto;
		padding: 3rem 1rem;
		max-width: 25rem;
		font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		font-size: 0.875rem;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	section {
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 0.875rem;
		font-weight: 800;
		margin-bottom: 0.125rem;
	}

	a {
		text-decoration: none;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	li {
		margin: 0 0 0.5rem 0;
		list-style: none;
	}

	.light-theme {
		background: #f6f0dd;
	}

	.light-theme a,
	.light-theme .gray,
	.light-theme.app {
		color: #303e24;
	}

	.light-theme a:hover {
		color: #68864e;
	}

	/* .dark-theme { */
	/* background: #303e24; */
	/* &.app, */
	/* &.gray, */
	/* h1, */
	/* a { */
	/* color: #f6f0dd; */
	/* } */
	/* h1:hover, */
	/* a:hover { */
	/* color: #86ac65; */
	/* } */
	/* } */
</style>
