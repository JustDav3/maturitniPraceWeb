import math


def get_indices(n, typ, start_pozice, pocet_znaku):
    match typ:
        case "1" | "2":  # SPIRÁLA (1=ven, 2=dovnitř)
            if n % 2 != 0:
                r, s = n // 2, n // 2
                pohyby_info = {
                    "1": [(0, 1), (1, 0), (0, -1), (-1, 0)],
                    "2": [(1, 0), (0, -1), (-1, 0), (0, 1)],
                    "3": [(-1, 0), (0, 1), (1, 0), (0, -1)],
                    "4": [(0, -1), (-1, 0), (0, 1), (1, 0)]
                }
                pohyby_zaklad = pohyby_info.get(start_pozice, pohyby_info["1"])
            else:
                stredy_info = {
                    "1": {"pos": (n // 2 - 1, n // 2 - 1), "pohyby": [(0, 1), (1, 0), (0, -1), (-1, 0)]},
                    "2": {"pos": (n // 2 - 1, n // 2), "pohyby": [(1, 0), (0, -1), (-1, 0), (0, 1)]},
                    "3": {"pos": (n // 2, n // 2 - 1), "pohyby": [(-1, 0), (0, 1), (1, 0), (0, -1)]},
                    "4": {"pos": (n // 2, n // 2), "pohyby": [(0, -1), (-1, 0), (0, 1), (1, 0)]}
                }
                info = stredy_info.get(start_pozice, stredy_info["1"])
                r, s = info["pos"]
                pohyby_zaklad = info["pohyby"]

            path = [(r, s)]
            krok_id, delka_kroku = 0, 1
            while len(path) < n * n:
                for _ in range(2):
                    dr, ds = pohyby_zaklad[krok_id % 4]
                    for _ in range(delka_kroku):
                        if len(path) < n * n:
                            r, s = r + dr, s + ds
                            if 0 <= r < n and 0 <= s < n:
                                path.append((r, s))
                    krok_id += 1
                delka_kroku += 1

            if typ == "2":
                pouzite_pozice = path[:pocet_znaku]
                return pouzite_pozice[::-1]
            return path

        case "3":  # HAD
            indices = []
            rozsah = range(n - 1, -1, -1) if start_pozice == "2" else range(n)
            for i, r in enumerate(rozsah):
                radek = [(r, s) for s in range(n)]
                if i % 2 != 0: radek.reverse()
                indices.extend(radek)
            return indices
    return []


def vytvor_matice_sifry(vstupni_text, typ_sifry, start_bod):
    pismena = [char for char in vstupni_text if char.isalnum()]
    if not pismena: return None, 0
    pocet = len(pismena)
    rozmer = math.ceil(math.sqrt(pocet))

    matice = [[" " for _ in range(rozmer)] for _ in range(rozmer)]
    indices = get_indices(rozmer, typ_sifry, start_bod, pocet)

    for i, (r, s) in enumerate(indices):
        if i < pocet:
            matice[r][s] = pismena[i]
    return matice, rozmer