<!DOCTYPE html>
<html>
<head>
    <title>Rachel H. - THANK YOU!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Web Designer, with experience in O365, Adobe Creative Cloud, WordPress, CSS, SASS, JavaScript, and ReactJS. User experience + User centric Design" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
        <link rel="manifest" href="favicon/site.webmanifest">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <link rel="stylesheet" href="assets/css/bootstrap.min.css?v=1.1">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Open+Sans&family=Roboto+Slab:wght@200&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/rachel.css?v=1.3">    
      </head>
    <body>
    <div id='nav'>
        <div class="wrapper">
          <div id="toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="ico">
            <div title="about"><a href="index.html"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#fff" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
            </svg></a></div>
            <div title="projects"><a href="projects.html"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#fff" d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" />
                  </svg></a></div>
            <div title="contact"><a href="contact.html"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#fff" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg></a></div>
            
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="index.html">Experience</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
      <main class="custom-disp">
        <h3 id="logo" class="mb-5"><span>Rachel H.</span><span id="ttl">Front End Web Developer</span></h3>
        <div id="home">
            <h4>Contact</h4>
            
            <p><strong>Thank you</strong>, your message has been sent.</p>
        </div>
    </main>
    <footer><div id="ft"></div></footer>

</body>
<script src="assets/js/jquery.js"></script>
<script src="assets/js/fullpage.min.js"></script>
<script src="assets/js/bootstrap.bundle.min.js?v=1.1"></script>
<script src="assets/js/rachel.js?v=1.1"></script>
</html>



<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "Rachel.Heneault@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>