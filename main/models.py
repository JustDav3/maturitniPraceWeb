from django.db import models
from django.contrib.auth.models import User

class VysledekTestu(models.Model):
    uzivatel = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Uživatel")
    datum = models.DateTimeField(auto_now_add=True, verbose_name="Datum testu")
    
    # Šifry
    sifra_zadani = models.TextField(verbose_name="Zašifrovaný text")
    sifra_spravne = models.TextField(verbose_name="Správné řešení")
    sifra_odpoved = models.TextField(verbose_name="Odpověď uživatele", blank=True)
    sifra_bod = models.BooleanField(default=False, verbose_name="Šifra správně?")
    
    # Uzly
    uzel_nazev = models.CharField(max_length=100, verbose_name="Název uzlu")
    uzel_hotovo = models.BooleanField(default=False, verbose_name="Uzel uvázán")
    
    # Celkové hodnocení
    body_celkem = models.IntegerField(default=0, verbose_name="Body celkem")

    def __str__(self):
        return f"Test: {self.uzivatel.username} - {self.datum.strftime('%d.%m.%Y')}"

    class Meta:
        verbose_name = "Výsledek testu"
        verbose_name_plural = "Výsledky testů"