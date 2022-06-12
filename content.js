const DEFAULT = "home";

const CONTENT = {
    "home": `
    <h2>COMP501 Assignment 3 - Team 1620</h2>
    <p>This website documents our inquiry into the ethical implications of mass aggregation of user data, and how it links to privacy and safety online.</p>
    <br>
    <p>Use the left bar to navigate between different sections of the assignment.</p>
    <br>
    <p>Made by James Pilcher, Matthew Mitchell and William Bigley</p>
    <br>
    <img src="./img/home_image.png" width="400">
    `,
    "topic": `
    <h2>Topic</h2>
    <p>Our chosen topic is the ethical implications of mass aggregation of user data, and how it links to privacy and safety online.</p>
    <br>
    <p>With the widespread adoption of the internet, billions of people have taken to social media to document every aspect of their lives. While there are many obvious upsides to social media, most users are unaware of how their data is misused by the massive companies that run social networks for a profit, and how malicious actors can use their data for nefarious purposes.</p>
    <br>
    <p>We believe this is a topic that is very relevant to our current society, as the majority of internet users don't understand the effects of uploading all of their data without respect to their privacy. There seems to be a lack of attention to this issue, as companies do not inform on the dangers of how their data can be misused.</p>
    <br>
    <p>The importance of this topic's link to people's privacy and safety online can be seen in the average person's understanding of what the internet is and how they may use it because of that. As mentioned in the definition massive networks are solely responsible for both how it's used and their understanding of it.</p>
    `,
    "opportunities": `
    <h2>Opportunities</h2>
    <p>There are only few opportunities where mass aggregation of user data can be beneficial to society.</p>
    <br>
    <p>For instance, police and law enforcement can use data collected by big corporations to find and prevent criminal activity, and discover evidence for use in trials. This already happens commonly, with many social media corporations cooperating with law enforcement requests. In an interview with KTNV, tech analyst Rob Enderle stated that "it [social media] gives them [police] far greater access and ability to solve crimes that might otherwise have been unsolved." (Garcia, 2021)</p>
    <br>
    <p>Another opportunity of mass user data collection currently in use today would be personalization. Algorithms are commonly used by those corporations that collect mass user data to determine a person's demographic and interests, which can be then used to recommend more relevant content on social media and websites, and display more relevant and engaging advertisments. This technique is widely in use today, with targeted advertisments all over the internet, and apps like TikTok and YouTube that learn your likes and dislikes, and show you content that you'll enjoy.</p>
    <br>
    <p>As mass aggregation of personal data is a practise that primarily benifits the profits of massive corporations, there are not many opportunities in which the practise benifits to society.</p>
    `,
    "risks": `
    <h2>Risks</h2>
    <p>One big risk the possibility of user data being sold or leaked during a data breach. Depending on the data, this could include personal information/photos, passwords, medical records and so on. Once this data is out there, many different people will have access to it which could have a negative impact on someone's personal life. This could include loss of accounts online, loss of important documents, harassment and even losing their job/kicked out.</p>
    <br>
    <p>The company Grindr in the years from 2017 - 2020, had been selling user location data to an ad network. This is something that you would want private and is a clear breach of privacy for the users on the app. There is an example of the negative effects on a individual which resulted in him resigning from his profession. "The magazine Pillar, which is aimed at a Catholic audience, was open about conducting an investigation into the priest's movements using "commercially available records" of his location data that were tied to his Grindr activity. The magazine boasted of being able to identify the priest's movements from 2018 to 2020, identifying him as visiting gay bars, bathhouses, and private residences identified with other Grindr users. The priest resigned after the story came out." (Ikeda, 2022).</p>
    <br>
    <p>There are probably more out there who have suffered harassment from something similar which can also affect one's mental health. This is a massive problem of having something you keep private no longer being private.</p>
    `,
    "choices": `
    <h2>Choices</h2>
    <li>Requiring Informing users</li>
    <p>By requiring large companies that run on selling user data to properly inform users about what they collect and why ( not just making it available on some obscure page your never required to look at to sign up ) and creating summaries of agreements for signups users would be much more likely to give less information over whenever and be a lot more informed on what data they have where and why.</p>
    <br>
    <li>Making It more difficult to give most information</li>
    <p>Without inconveniencing the user, a lot of data collection can be cut out, this should be required because much of this information is used for cross platform tracking which most users are highly likely to be against.</p>
    <br>
    <li>Requiring easy access to user data control</li>
    <p>Making the users control of what data is stored easy to access is critical because it allows users to correct potential mistakes they may have made in existing agreements with these platforms.</p>
    `,
    "reflections": `
    <h2>Reflections</h2>
    <p>Below are links to each of our personal reflections.</p>
    <br>
    <div class="reflections">
        <div>
            <p>James Pilcher</p>
            <p>(21154854)</p>
            <p><a href="./reflections/personal-evaluation-21154854.pdf" target="_blank">Link</a></p>
        </div>
        <div>
            <p>Matthew Mitchell</p>
            <p>(21152629)</p>
            <p><a href="./reflections/personal-evaluation-21152629.pdf" target="_blank">Link</a></p>
        </div>
        <div>
            <p>William Bigley</p>
            <p>(21152433)</p>
            <p><a href="./reflections/personal-evaluation-21152433.pdf" target="_blank">Link</a></p>
        </div>
    </div>
    `,
    "references": `
    <h2>References</h2>
    <li>Garcia, A. (2021, October 27). Las Vegas police use social media to help put criminals behind bars. Retrieved from KTNV: <a href="https://www.ktnv.com/news/las-vegas-police-use-social-media-to-help-put-criminals-behind-bars">https://www.ktnv.com/news/las-vegas-police-use-social-media-to-help-put-criminals-behind-bars</a></li>
    <li>Ikeda, S. (2022, May 9). cpomagazine. Retrieved from Grindr Location Data Sold to Ad Networks From 2017 to 2020, Legacy Information May Still Be Available: <a href="https://www.cpomagazine.com/data-privacy/grindr-location-data-sold-to-ad-networks-from-2017-to-2020-legacy-information-may-still-be-available/">https://www.cpomagazine.com/data-privacy/grindr-location-data-sold-to-ad-networks-from-2017-to-2020-legacy-information-may-still-be-available/</a></li>
    <li>The Guardian. (2018). Facebook accused of conducting mass surveillance through its apps. Retrieved from The Guardian: <a href="https://www.theguardian.com/technology/2018/may/24/facebook-accused-of-conducting-mass-surveillance-through-its-apps">https://www.theguardian.com/technology/2018/may/24/facebook-accused-of-conducting-mass-surveillance-through-its-apps</a></li>
    <li>Wayt, T. (2021, July 13). Facebook reportedly fired 52 employees who were caught spying on users. Retrieved from nypost: <a href="https://nypost.com/2021/07/13/facebook-reportedly-fired-52-workers-who-were-caught-spying-on-women/">https://nypost.com/2021/07/13/facebook-reportedly-fired-52-workers-who-were-caught-spying-on-women/</a></li>
    `
};
