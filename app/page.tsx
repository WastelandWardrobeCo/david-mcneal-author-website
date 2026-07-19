const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="David McNeal home">
          <span>DAVID</span> <i>Mc</i><span>NEAL</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#books">Books</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#books">Explore the books <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Speculative fiction by David McNeal</p>
          <h1>Ordinary people.<br /><em>Impossible choices.</em></h1>
          <p className="hero-lede">
            Stories about memory, consequence, survival—and the quiet moments
            when a single choice changes everything.
          </p>
          <div className="hero-actions">
            <a className="button gold" href="#featured">Discover Borrowed Years <Arrow /></a>
            <a className="text-link" href="#books">View the complete catalog <span>→</span></a>
          </div>
          <div className="hero-proof">
            <span className="monogram">DM</span>
            <p><b>Independent fiction</b><br />Published under the Systema Obscura imprint</p>
          </div>
        </div>

        <div className="hero-art" id="featured">
          <div className="book-aura" />
          <img src="/borrowed-years-cover.png" alt="Borrowed Years by David McNeal book cover" />
          <div className="book-caption">
            <span>Featured novel</span>
            <strong>BORROWED YEARS</strong>
            <small>He lost an hour. He gained a lifetime.</small>
          </div>
        </div>
        <p className="vertical-note">STORIES THAT STAY WITH YOU</p>
      </section>

      <section className="manifesto">
        <p className="section-number">01 / THE WORK</p>
        <blockquote>
          “Every miracle carries a price.<br />The question is who pays it.”
        </blockquote>
        <p className="manifesto-copy">
          Intimate stakes. Unsettling possibilities. Human beings forced to
          decide what matters before the moment passes.
        </p>
      </section>

      <section className="catalog" id="books">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Enter the stories</p>
            <h2>Books & worlds</h2>
          </div>
          <p>Standalone novels, post-apocalyptic worlds, and strange stories from just beyond the familiar.</p>
        </div>

        <div className="book-grid">
          <article className="catalog-card featured-card">
            <img src="/borrowed-years-cover.png" alt="Borrowed Years cover" />
            <div>
              <p className="card-kicker">A speculative novel</p>
              <h3>Borrowed Years</h3>
              <p>What if the happiest years of your life never happened—but you remembered every one of them?</p>
              <a href="#contact">Explore the book <Arrow /></a>
            </div>
          </article>
          <article className="catalog-card red-card">
            <div className="card-symbol">V</div>
            <div>
              <p className="card-kicker">Post-apocalyptic fiction</p>
              <h3>Lady & Delilah</h3>
              <p>Five arrows. One relentless survivor. And a dire wolf who knows exactly when mercy has failed.</p>
              <a href="#contact">Enter the wasteland <Arrow /></a>
            </div>
          </article>
          <article className="catalog-card signal-card">
            <div className="signal-lines"><i /><i /><i /><i /><i /></div>
            <div>
              <p className="card-kicker">Short fiction & experiments</p>
              <h3>Systema Obscura</h3>
              <p>Dark transmissions, psychological turns, and stories that leave the door slightly open.</p>
              <a href="#contact">Follow the signal <Arrow /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="portrait-wrap">
          <img src="/david-mcneal.jpg" alt="David McNeal" />
          <span>AUTHOR / STORYTELLER</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Behind the stories</p>
          <h2>David McNeal writes about the moment the impossible becomes personal.</h2>
          <p>
            Fascinated by forgotten places, strange objects, and the quiet strength
            found in unexpected moments, he creates fiction where the extraordinary
            feels close enough to touch—and every miracle carries a price.
          </p>
          <a className="text-link" href="#contact">More about David <span>→</span></a>
        </div>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow"><span /> Keep in touch</p>
          <h2>Stories are better<br />when they’re shared.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@davidmcnealbooks.com">Email David <Arrow /></a>
          <a href="#books">Browse the catalog <Arrow /></a>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 David McNeal</span>
          <span>A Systema Obscura imprint</span>
          <span>DAVIDMCNEALBOOKS.COM</span>
        </div>
      </footer>
    </main>
  );
}
