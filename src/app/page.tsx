import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="site-header">
        <div className="flex items-center gap-4">
          <Image
            src="https://ext.same-assets.com/42803198/3522665158.png"
            alt="Domo Kitten"
            width={40}
            height={40}
            className="cat-mascot"
          />
          <div>
            <Link href="/" className="site-name">OverTheWire</Link>
            <div className="site-slogan">We're hackers, and we are good-looking. We are the 1%.</div>
          </div>
        </div>
        <div className="header-buttons">
          <a href="/information/donate.html" className="action-button">Donate!</a>
          <a href="/information/chat.html" className="action-button">Help!?</a>
        </div>
      </header>

      {/* Top Navigation */}
      <nav className="top-menu">
        <ul>
          <li>
            <a href="/wargames/" className="selected">
              Wargames
              <span className="update-marker">updated</span>
            </a>
          </li>
          <li>
            <a href="/rules/">Rules</a>
          </li>
          <li>
            <a href="/information/donate.html">Information</a>
          </li>
        </ul>
      </nav>

      {/* Main Layout */}
      <div className="layout-container">
        {/* Sidebar */}
        <aside className="sidebar">
          {/* SSH Information */}
          <div className="ssh-info">
            <div style={{color: 'var(--green)', fontWeight: 'bold', marginBottom: '4px'}}>SSH Information</div>
            Host: bandit.labs.overthewire.org<br/>
            Port: 2220
          </div>

          {/* Navigation Menu */}
          <ul>
            <li><a href="/wargames/bandit" className="nav-link bandit-title">Bandit</a></li>
            <li><a href="/wargames/bandit/bandit0.html" className="nav-link">Level 0</a></li>
            <li><a href="/wargames/bandit/bandit1.html" className="nav-link">Level 0 → Level 1</a></li>
            <li><a href="/wargames/bandit/bandit2.html" className="nav-link">Level 1 → Level 2</a></li>
            <li><a href="/wargames/bandit/bandit3.html" className="nav-link">Level 2 → Level 3</a></li>
            <li><a href="/wargames/bandit/bandit4.html" className="nav-link">Level 3 → Level 4</a></li>
            <li><a href="/wargames/bandit/bandit5.html" className="nav-link">Level 4 → Level 5</a></li>
            <li><a href="/wargames/bandit/bandit6.html" className="nav-link">Level 5 → Level 6</a></li>
            <li><a href="/wargames/bandit/bandit7.html" className="nav-link">Level 6 → Level 7</a></li>
            <li><a href="/wargames/bandit/bandit8.html" className="nav-link">Level 7 → Level 8</a></li>
            <li><a href="/wargames/bandit/bandit9.html" className="nav-link">Level 8 → Level 9</a></li>
            <li><a href="/wargames/bandit/bandit10.html" className="nav-link">Level 9 → Level 10</a></li>
            <li><a href="/wargames/bandit/bandit11.html" className="nav-link">Level 10 → Level 11</a></li>
            <li><a href="/wargames/bandit/bandit12.html" className="nav-link">Level 11 → Level 12</a></li>
            <li><a href="/wargames/bandit/bandit13.html" className="nav-link">Level 12 → Level 13</a></li>
            <li><a href="/wargames/bandit/bandit14.html" className="nav-link">Level 13 → Level 14</a></li>
            <li><a href="/wargames/bandit/bandit15.html" className="nav-link">Level 14 → Level 15</a></li>
            <li><a href="/wargames/bandit/bandit16.html" className="nav-link">Level 15 → Level 16</a></li>
            <li><a href="/wargames/bandit/bandit17.html" className="nav-link">Level 16 → Level 17</a></li>
            <li><a href="/wargames/bandit/bandit18.html" className="nav-link">Level 17 → Level 18</a></li>
            <li><a href="/wargames/bandit/bandit19.html" className="nav-link">Level 18 → Level 19</a></li>
            <li><a href="/wargames/bandit/bandit20.html" className="nav-link">Level 19 → Level 20</a></li>
            <li><a href="/wargames/bandit/bandit21.html" className="nav-link">Level 20 → Level 21</a></li>
            <li><a href="/wargames/bandit/bandit22.html" className="nav-link">Level 21 → Level 22</a></li>
            <li><a href="/wargames/bandit/bandit23.html" className="nav-link">Level 22 → Level 23</a></li>
            <li><a href="/wargames/bandit/bandit24.html" className="nav-link">Level 23 → Level 24</a></li>
            <li><a href="/wargames/bandit/bandit25.html" className="nav-link">Level 24 → Level 25</a></li>
            <li><a href="/wargames/bandit/bandit26.html" className="nav-link">Level 25 → Level 26</a></li>
            <li><a href="/wargames/bandit/bandit27.html" className="nav-link">Level 26 → Level 27</a></li>
            <li><a href="/wargames/bandit/bandit28.html" className="nav-link">Level 27 → Level 28</a></li>
            <li><a href="/wargames/bandit/bandit29.html" className="nav-link">Level 28 → Level 29</a></li>
            <li><a href="/wargames/bandit/bandit30.html" className="nav-link">Level 29 → Level 30</a></li>
            <li><a href="/wargames/bandit/bandit31.html" className="nav-link">Level 30 → Level 31</a></li>
            <li><a href="/wargames/bandit/bandit32.html" className="nav-link">Level 31 → Level 32</a></li>
            <li><a href="/wargames/bandit/bandit33.html" className="nav-link">Level 32 → Level 33</a></li>
            <li><a href="/wargames/bandit/bandit34.html" className="nav-link">Level 33 → Level 34</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1 id="bandit">Bandit</h1>

          <p>
            The Bandit wargame is aimed at absolute beginners. It will teach the
            basics needed to be able to play other wargames. <strong>If you notice
            something essential is missing or have ideas for new levels, please let
            us know!</strong>
          </p>

          <h2 id="note-for-beginners">Note for beginners</h2>

          <p>
            This game, like most other games, is organised in levels. You start at
            Level 0 and try to "beat" or "finish" it. Finishing a level results in
            information on how to start the next level. The pages on this website
            for "Level &lt;X&gt;" contain information on how to start level X from the
            previous level. E.g. The page for <a href="/wargames/bandit/bandit1.html">Level 1</a> has information on how to
            gain access from <a href="/wargames/bandit/bandit0.html">Level 0</a> to <a href="/wargames/bandit/bandit1.html">Level 1</a>. All levels in this game
            have a page on this website, and they are all linked to from the
            sidemenu on the left of this page.
          </p>

          <p>
            You will encounter many situations in which you have no idea what you
            are supposed to do. <strong>Don't panic! Don't give up!</strong> The purpose of this
            game is for you to learn the basics. Part of learning the basics, is
            reading a lot of new information. If you've never used the command line
            before, a good first read is this <a href="https://manpages.ubuntu.com/manpages/noble/man1/intro.1.html">introduction to user commands</a>.
          </p>

          <p>
            There are several things you can try when you are unsure how to
            continue:
          </p>

          <ul>
            <li>
              First, if you know a command, but don't know how to use it, try the
              <strong>manual</strong> (<a href="https://en.wikipedia.org/wiki/Man_page">man page</a>) by entering <strong>man &lt;command&gt;</strong>.
              For example, <strong>man ls</strong> to learn about the "ls" command.
              The "man" command also has a manual, try it!
              When using <strong>man</strong>, press <code>q</code> to quit
              (you can also use <code>/</code> and <code>n</code> and <code>N</code> to search).
            </li>
            <li>
              Second, if there is no man page, the command might be a <strong>shell
              built-in</strong>. In that case use the "<strong>help &lt;X&gt;</strong>" command. E.g. help
              cd
            </li>
            <li>
              Also, your favorite <strong>search-engine</strong> is your friend. Learn how to
              use it! I recommend <a href="https://www.google.com">Google</a>.
            </li>
            <li>
              Lastly, if you are still stuck, you can <a href="/information/chat.html">join us via chat</a>
            </li>
          </ul>

          <p>
            You're ready to start! Begin with <a href="/wargames/bandit/bandit0.html">Level 0</a>, linked at the left of
            this page. Good luck!
          </p>

          <p>
            <strong>Note for VMs:</strong> You may fail to connect to overthewire.org via SSH with a "<em>broken pipe error</em>" when the network adapter for the VM is configured to use NAT mode. Adding the setting <strong><code>IPQoS throughput</code></strong> to <code>/etc/ssh/ssh_config</code> should resolve the issue. If this does not solve your issue, the only option then is to change the adapter to Bridged mode.
          </p>
        </main>

        {/* Right Sidebar - Action Buttons */}
        <aside className="shortcuts">
          <a href="/information/donate.html" className="action-button">
            Donate!
          </a>
          <a href="/information/chat.html" className="action-button">
            Help!?
          </a>
        </aside>
      </div>
    </div>
  )
}
