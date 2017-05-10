function jour_nuit(id)
{
    heure = date.getHours()
    if (heure >= 22)
        {
            document.write('<span style="color: purple;"> ☾ bonne nuit !</span>');
        }
    else if (heure >= 7 && heure <= 10)
        {
        document.write('<span style="color: skyblue;"> ☀ debout !</span>');
        }
    else if (heure >= 12 && heure <= 13)
        {
        document.write('<span style="color: green;"> ♨ bonne appetit ! !</span>');
        }
    else
        {
        document.write('<span style="color: tomato;"> _ </span>');
        }
}