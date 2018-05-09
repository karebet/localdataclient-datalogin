# localdataclient-datalogin
localdataclient-datalogin

footer html
```php
<?php
ob_start();   
system('ipconfig /all');   
$mycom=ob_get_contents();  
ob_clean();   
$findme = "Physical";   
$pmac = strpos($mycom, $findme);   
$mac=substr($mycom,($pmac+36),17);   
$ip= $this->input->ip_address();
$sessionlogin= md5($ip.$mac);
?>
<script type="text/javascript">
  var sessionthispc ='<?php echo $sessionlogin ?>';


  var localdataclient = {"savelogin":true,"user":{"user":"robeth","password":"abcdefghijklmnopqstuvwqyz"}};
  var localdataclient = {"autologin":true};
  var localdataclient = {"deletelogin":true};
</script>
<script src="localdataclient.js" type="text/javascript"></script>
```
