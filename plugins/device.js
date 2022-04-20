export default (context, inject) => {
    const IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    const IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null))
    const IS_IOS = IS_IPAD || IS_IPHONE;
    const IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null;
    const IS_MOBILE = IS_IOS || IS_ANDROID;

    inject("device", {
        IS_MOBILE,
        IS_IPHONE,
        IS_IPAD,
        IS_IOS,
        IS_ANDROID
    });
};