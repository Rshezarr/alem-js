function sameAmount(str, regex1, regex2) {
    const resRegex1 = str.match(new RegExp(regex1, "g"));
    const resRegex2 = str.match(new RegExp(regex2, "g"));
    if (resRegex1 != null && resRegex2 != null && resRegex1.length === resRegex2.length) {
        return true;
    }
    return false;
}