<?php
//app/Helpers/Envato/User.php
namespace App\Helpers;
 
use Illuminate\Support\Facades\DB;
 
class Image {
    /**
     * @param int $user_id User-id
     * 
     * @return string
     */
    public static function get_image($image) {
         
        $image2 = $image;
        dump($image2);
        return $image2;
        
    }

    public static function show_image() {
         
        return ($image);
    }
}