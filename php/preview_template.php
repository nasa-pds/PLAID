<?php
/**
 * @file Gets the XML from the database and outputs it to the front-end.
 *
 * Creation Date: 8/2/16
 *
 * @author Trevor Morse
 * @author Michael Kim
 */
require_once("interact_db.php");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: text/plain');
    echo getLabelXML();
}