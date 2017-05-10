function jour_nuit(id)
{
    heure = date.getHours()
    if (heure <= 8 || heure >= 19)
    {
        document.write('<span style="color: blue;">☉</span>')
    } else
    {
    document.write('<span style="color: tomato;">☀</span>');
    }return true;
}