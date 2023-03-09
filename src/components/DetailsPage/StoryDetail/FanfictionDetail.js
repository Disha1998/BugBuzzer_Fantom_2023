import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMoralis, useMoralisQuery } from "react-moralis";
import ModalContribute from "../../Contribute/Contribute";
import { Link } from "react-router-dom";

function FanfictionDetail() {
    const { data, fetch } = useMoralisQuery("nftMetadata");
    console.log(data, 'data nft');

    const params = useParams();
    console.log('params', params);
    const { Moralis, isAuthenticated, isInitialized } = useMoralis()




    return (


        <div style={{ marginTop: "22px" }} className="container storyDetailContainer">
            <h2 className="storyDetailTitle">Smart Contract And Its Upcoming Advancements To Expect In 2023</h2><br></br>
            <h5 className="text-muted">By :  Madelyn nora</h5><br></br>
            <img className="story-detail-img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXGRgYGBUYGBcYHRsZGhsXHRobHR4dHSggHR4lHxodITEhJSorLi4uHyA1ODMtNygtLisBCgoKDg0OGxAQGy8lICUtLTAtMDItLS0yMjItMC0tLTItMC8tLS0tLTItLSsuMC0tMC8wMi0tLS0tLSstLS0vLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEUQAAICAAUCBAQDBQUGBQQDAAECAxEABBIhMQVBEyJRYQYycYFCkaEUI1Kx0TNicsHwFSSCkqLhB0PC0vEWg7LERFNj/8QAGwEAAwEBAQEBAAAAAAAAAAAAAwQFAgEGAAf/xAA4EQABAwIFAgQFAwMEAgMAAAABAhEhAzEABBJBUWFxEyKBkTKhscHwBULRFGLhUnKC8ZKiM1PC/9oADAMBAAIRAxEAPwD5w0eOCYYy5bjEGgx+siq+PPiqMCKuCY0rFkUHfE1WzjKl4wupiKR4MhhxOCC8NMvla5wrVqgYSrV9OBoMvhhBl8WxQ42XT+k5dcuryIxmO/hmxt2PGy1veJmazYpAEgzxhRAXmCQgiA8n/uTsBJ2xmY8v3wwg6JLIAyp5brVen9ScOjFCPM8CAkbaZCUPuCaUn21jA2ZjSZgC548qCgAPoGa8IKzKjKY639gD84x8P0+onzLPYPpPrqTHYAl+GJwt6z0FoZPCsOSLFWftXr/2wPm+iyRLbRkD1rYe31/XGnDTGv35VQQtmOOqBAAMkZY+29YG6WggVklXQxJEmoXqQg7LbAA3vffbAxmqiUhyCRe888N6BQchyL4OrKI8QgOlJdiSGHALanfqU2LA2xgZsriC5ADdsbzO9PgOULwxszqwuTet7/4TW23b1xkMyhPOKlDNGqCzhi03wBeumQkkSHcdfb1wqzMgGy4XPFeG8mXxX+zYfQsJthinUCRGFYgw86H8IZrN0Y4zo/jbyp+Z5+1403wkMhCniZhGeYMdKaWZdNCjXyk88nGok+PNXlgyzvQvc6aA70Adh9cTs1+o5gEpoUnb9yoHpIfu7d8UKXgMFVagnYSfVvoPfCnp/wD4TqF/fTktXEYAAP1YEkfYYXL/AOHCL/b53LxnuOf/AMmX+WNVH17PNR8KCJDvqdjsOxI1WL7bWcIOq9MikkeV80hkYgkKj6a2G3vxt9bOJ1DN5wqPi1f/ABAUx9EkD54LmKmWSgFCP/IlEM7+YgnA4+F+lRf2udd/8Cj/ACVsd+wdEH4swfej/wC0YKm6Dlo1DOZqbcBQtj3O9b2Nv1xeHykyxRLl2tbGxAYj1LAb7b1X3wT+oJAPiVDyQUp//IwucwEnSRTSdgQpRLt14kc2a7Af7P6K22vML70f/YceP8M9KcVHnJF/xIf/AGLgluh5QsqLmGjcGm1IBxW/NL35N4sl+FgsIlEiux5RQa0+oPNe9Vvj45pIgVVh7P8A5Rbq+Mqr1WJFJCgHdjw3CnebN2wgzn/h07KXyk8eZUdlIVvysj9RjFNkSCdQIokEEUQRyD6HG6y+XeJ1eM06sCD9D39vbCnrOpndu7MzMa5ZiSf1OKeWzNUEpUrUOWY+rQdmgYWH6hSqAeGGPDuG5B798YvMx74pWAnDfNxb4BmbsNsWkLcRihTqkgNgdqXA0rXi11xURg6YnDKBikjHmLCMRIwTBnxKOFm+VS1c0Cf5Y8liZTTAg+hBH88a/pUBiiiukLfhZhGSdYDHcizoN/aMjesLOqRHw5C8hk/eUCwr94vzadyNJU9q4G3GFE5l1kbO3zbtjWEGPccMe4bxzH0Bun2oNd8US9PN1WN//wDTstlAlkV3X1rb72PsbwD1PpbQsVdaavY7HvjyVP8AUUqLJIJ748iqrXpOVoIDs5BAfvbnGMmygAoffFEWW3w5ny1YHEWHk1S2DIruL46FAvGNJ0HoxkOqWNtGkuoogSbjhiK78j9LvFfw90TWrSuhZF2Cjl2PAvtQ3v6Dvtrsv1glF1BQiggIu40oBZJJ302qgcFmG+xxJzmaU5RTvuXtDx19u72ay2XQtQNU3kBr7Odm9yYLEEah4s1pXxGURKCNKUlgc86dVkVtZPclQdWBYc3JmWZYvF9zY4++w+u7f3jjxc2MwI4wiq7OaY+YLv6Hk8bnvZwn+Kers8hykFrEhKmqBdhsWNbabB242v0pSjRKlaQAD1kACOpPvMlxjfilaX1kogf3EkWeNPJYQGAd2D7KeAhYyZ4swqwCCLNgAngnbjnF6OrknLTEOga43XUGq7prIBHpd/THzbMSDZE3Ucf3mPLf5Aele+NT0yBoFaZxWYKFdN7gHYufRtPlrnfUfc1fJhCdRWXNgQG4kACOTtEuWx9TqUgPhAAl3U/MF3fgbzDWvy3UJ0mVidybIAADi+PQg4YdVzSlomlUSVLMl7jVGj0vBo/iwL0mZ/mbTXK2OADRkJG4CnjuzUo70Vns7FEI2jg12vlBcjSATtwdTE2W37972CsDWGTPQgbHdw1+tuWGBUQ2WOtVyCNUwCCSzFwSA3RjYnBUEkZdszNIxjiGkoV0qok8taQWFb7iwdgT2xnOv5RFnkVFKqCaB7V/leH/AE7qsckTvLCNC6iYgFAIABPpZ274B68VnlSSFaEyqVGwN7jfegbFfbH2XK01i4IADbaQzEBh/wAi/wDBJ3nz4mWCwQSFDYuXF5c3KQ3RzdhmGhGDel9HMhskKgFl2uuQOa3O/Axox0XLxQ+JIyyvdaA3e+LQGz+mKc1HI0Zkkm115lh3rf2Ppv8Ab0wwrOhYZHLP/A/lh32U/pVUv/luzsDYf3HbsnUe284Y8jBGwepZbBBAb20jc/c3yD9MQy/WGdtMMYjc0fLShtN1q0gdvev54syPRAB4mZPmO/hXpof32/CP1+mCZepBImlyrqqKa8sRpmO1CRgdVcmu2EyyiWdZe5J0vsIH29YhpPihDqamlIskDU27uoSxnzFQ3TM5/MTOHI8MK/e11En73+mJmZ03ckeiDa/qBVD+f641WSmkkRDNvNu6KAFJWtr7X3Br8Pvhd1FBmmV01DRuQRV9xZ/QHj3xpNdyykwLlyRFmLO3+eDgC8oUp1IWSSzBmMsS8s4cOPU3DIMzmH1nzEEUNjXHPHa7wR07OzK2sNsOSxJG/r/23xQ0YQnxN2/g9/c9vp/LAXUOrIrmItlwyabE2YGXUEqrgINLM/lZbNDfucMK0sAz+n57uB1wlTC0uvVpabs3HJfoAT0Ach91aXLuFbfxW3cgc7ehNAeldsR6P1RYmA8yoSNVyEfek329LwqDO3m8KJ1oeaDMF22FbK6Kp/5xiWTZCWKkkoLMbgpIPQsh30/3hangE3gaQjRoL/nBt2wXxVmp41PSWuw4uVJLKbksAXu7Y2PxBkVcI0SMC1lj5htV739Sfzxieo5TGwyWbA8JFcKxI1Pp3sjuWPm3PbbnA/xL0u1MqjTvTpd6W/8AUDgOUrGioIUY2M8nn5ejs4fuaQKtRWYot/cAzfCHI6i6nbchwlZHzLO5T3GE+ZgAxoeoxkE4R5rHrMuokYdyyyQJwrkUYHYYKkTFLLiik4qJOBzjysXFcVlcEBwUHBuR6lpKiRfERboGiVBFHTYIr2II+h3xHqcsZUCMivEkbTRFBglA2KvyngnAhGG3xFCqiLSI9wfkIO1LV0BY5pjZO98YAQlNQdX7R/3/ADggLjCTHYnWOwy+OPj7xkxmTcsUqzRkhmcMBuvY8Mp3qttrw2ybnOKwkZCKJYab0c6dJvjubv02qzgeldYeBkZmLBz51O4MW6la4F+Y7cUuNFk4zl81JGrEBdY1aSxoXR2+g83bntjwWayqk8O3lLcXeLiJAGzcYjpqCmUguUKLKSVPJEM7QZMmC8vOBM70WcMR4LEg1dFvyoVgDPdNkhNSRlDzuNvz4xu8vn5JEuKRdcd0FsI9VqBB/EpIs8HVt7KMz8W5gObAUcFAAfvZBxylmcwTp0pLXkj7H6FrFiMLVsplaCZUuWYsFD6i1mcHdmOKsqn7JGSza2DJIIgSNJANaiOQbFqNthZ7YmF8SFFHMsbKhPeRZzJp9iRv7kLht0b4hikepY1VyK1aRe3b6f0wLmOmkylkaL9klIvVWgVxdkEMO1Ue1jC/iq1tUGk3fltg3uOWIPOHaYStI8NWtBBTpAYpBIkvMwCbBwU7JxmImZAatWQgjsQeD/IYfZ3L5d4xOYlaaUefSShN3ZoHmxR2F74K6q6xS+GbkDps5KNQF7Wys2xB/EcCy5qJU8V0EUYpVLaGLHuAuizW9+YAeuCmoV6VJcPwbg7QxvLCY4wvSoeCpdIKntYiXl0wD8RiWecK4kdBcEAir8R5H/G5JX7EYbDp4LliFLjkVQ0nbcE9/U6VN7XwY9Lz/jMJIXJRDToQEP1DM7eXcbatthW4vvi2dHQIhssyksBQpBIKvk0W9Pzx8pS1VQgwdzJPq82nqMa0JQkrqqKms5DFgfhAcXLQGBkjkPO6HNLICt3WlueN2I8xHA4AHAA2wwfJJl4w8wtzusd1uO5P+rx3RoViQTyAEk1Ep21EbE/b9cC53ITZkoB8zlmZiOFUD6DfURVjAirUrSVMkXPaT7ASb7bvieEGtUCtOqooOkXCRYKN3J/amQzKIIIGOyjLPGwsJ4jlSwA0qAEva+dP64pfMeGiJEWiWMEeIxBJ3LDgA7WeNsRlntfDhVmQAf4bAoudt7578nnFeXiaRgkhG/ewWX7D/Pj2wxpZ3gXbtDt22McTg5rEJFOkb72c9/QGPUgDFELgAlQQo5bux9Ae1967d+MHdDcHMZcv3JPHBIISh7bbYFzECB9AbWAaUDYe5Y8e5r07VgzrczyLHMq1XJrgFiFP/Sdu140s64/1Ahzs4LdS/wBYwGiDTJV/oILDdlB+gb7uZd3Ueay058Pxo5CWB0tG5OwO5BA9+dsDdQ62kDCJV8QqaLnZV43Cjbb09uMI+q9IeV/23LoWD+ZkUHUku21DfSWOr6X7XVB0DOOQXVYUpLkmpd9K2KO5N32xhOWokAlfl4JAIVuIYv2DG4jFWr/UNpoJ7KGpiLv5iRN3Mi0GcNct1R0zGks0sjMACaHmvah/qh2wXneuOJ3014YLgtR2VQdRu+4ND3I9cU5TJKC37PreR71Zlhp0g3YQN8orYsfesDZt0EKCVCIwx8NBY8bc0zAi/C21Wa1EbDisCnTUseXZrMfaGtAhg5LbZpBaB8cPqJBLRtql7upUvCR5iMKtXjWw+fkj+I0LI97uxjoMw9hQ5F0Nvc45IkHyymx6rW/rtg7L5MyHUuksvNEb13o0RxxW+GllIE26/wCRiQCtVQqpwSTY7f8AE/S8dyteBJJCTGuok+dB4UgHP9oml9vriGciOnWWZ40JIlFDMZcj/wAzVVPGBu2wIF2HFnDfNdIkhjBavMaYg/KPT7nv7YumhWDSAwdiupSLIoc78Hg4AsoI8nYcRd9vx5xqpUroL1gTpYkn4kvbSp3HI/a8KGJ/DkD5s6W0h4yFkZflIG6SL6hxvXY2O14d/F0e0a9jq571X61jM/CmeOWzUyIPIoda/uI6tGv0VcxpHsuHnXyxfWTat8h/nt2rvhIhXjpOzR7fX7DBK5pUsnVShJ8RShqIgMFFiA8JJBgWUpo8oxguqw84zWZjxt+pw84zGcy++PUZOq6cCyVaMIJI8VGLDKSHERFioKmLAqxhY0OKDHhz4GKGy++CJq4KmthY0eG/xG+pYTvQDLvJ4hsBL4dgo3G2x23wM8GG3xJG50alIUa9JLRtfy2KQeWtvKbq8ZXUGtHrv043+2GEVRpJxl/Dx2CdOOwxqxzWcfSPh5BJnIpUrSGBZW30Kgu/cBRsfWr7Xp16j4sr5hv3KvUasKN8WG+XUfYb8fdX0fpMiAwwgNOwHikHZFBFICTvvRY9zQ7btZk/8uLeJ7SWPc0wNE2CRVijpqrvHicyumupBeGd9rk+v7XDKZnl8Ip1gMHYF7XUzMOSmXAIIJ6Yry+eYHWSBIhAkNaQQdo5tI+Vd/DauA3quJ9YhTylh+7a9J7xtvsfawduxDD8N4rfpzogel1R2AGJAkiNh1ahe4vb1DUNxhn08xFQrXLE4BXmyLpGuwdVgKfcKdrbAKi0Blo2gt7xt1AiIuFYMaRq0ghcHku3c7kcncMolyMZebLGIE3erZWH/UfY1Q/ltvhh0RjOkmXJFuLS+Na8fY7qfbHuckjjhaNoSrHeMMQaBqjfIHt9cD/C6/7wrXQCuSfS0av8sGKiaSlbix7SDf8AJxIpgUsygCeRMO4UDA2Ljo3D4a9PycapAnhBjoXlmBXWS5BphsC5F123vGN65mjmJ3djUUbFVA2AAJ0qo/iPP5k42GfzqQyzyuCUVVoD1l7duFLH7Yz3UI0lcHLRkrVg+E0gv8RqzR4u1vb0rBco4qGooEuL3Z5N95Ho72xQYqCgGlRDASQklIszyDfgNwJfCqmQTNp/gVQNwFtrH+ZPrvgrqe3ggkCg213uWvttxpPOB8jIf2dSZlJLPXzgVSVQqhRDfnhp1bp0MQeSaRmIZRpQgaKCqB31NpCmvLjlRQ8cvyQAASYZO/d7D1wnVy5rCoEbJAfofP8AUFvU2BII6zNU5WtokUKDxwo/WycMer9SjRI1cWGuwQSy87/wivz37YhAsWbjVS6iRa0SD8YHF+hA2I5/liHX/h7MSlSo10K3YD8r2H2xLSqnqSioWId5bbY8PPeMMJRXT41WgnWFszDU0uUqAcggQzaSJG2M28xZtOgsRd6nYgVydqAGI5jOWojWgo5IFaj7+w7XjRdS+H5pKCQaNhfnTeuL817ev6YK6X8GpoucNrs7BhVdvXDZzlBKQpR9AX9b/nswE/p+bWsoSk2+JQKQRw5T9fpfG1pX3b9B/wB/5Y0nR4481l1iLlZUBU1vqBJZTp/FpJ7bj74eP8GZcmyX/Mf0xj/iXp0cM2iMkgAXfY+lgD2xxOYp5g6EkhV3bj/G3rcYIrKV8iPErJSUHykarvMWlw7jtAOGQ6KYCVXN6Cvmc6XBrajt2F+vc4ys/V3zBJV52UceEVEpHOqWSQ6MvYqkDK9b3ewLjlLFbd9S/KdRII/hazXtf2PtNumCkpKVVcKoWgt7EBVAANk8DfnBfDIPnU/oOvDOGs5jgtjIr5co000qHYkn0cqCT1A1WYpc4WJIpNCNHHrJPmWb7kxMP+rBBjaxpXNb7aoMwHUf/alYauf/AOs4tTIONglD6aR+uLEyjXwv/MP640aNMfCfdvsE4Xq56qQYUB0XVf5qUPdJwIkpLFQUlYCzG4/Z8wBvuUICN/yxj+9hl01BOQkd6l3ML/u5PqwPC7fMLXgAk2cFT9PVlqYKQPMA1WpPdW5Q7/MpB35wqzmTZSgUvNp3Xc/tMZ3topNg9caTTEd3JrARULQfuP8AH0xlNSlUVpUJ48qV7WLaFm5ZSUqUWYmBjaT9RMCRNPqBZipXQpDVwTZ2senvjNZqcySFmPmBoA1x2AoAVRB4Hf1wugzIKhXYFXIVJ1NKW4CSjiKQMAeynceUkLhjlovOurYgmwewHN/mR9Bj6nTRTBIvPtf6R7cNgn6jWXUApCxgSS6vhLvIMuQQCDsXBIfS3DZrNEdvFv75jwv/ANc403TswpBhk+Rtwf4SP9UcZ74Yy5dHmABaVIVZf71NMf1zP6YaRxreky0fRRq/UeXAVBJcE8ehAE+hwOrSzFTN68ujUGO3lKVlSgCYAdKg8u9pGKeqZQqSrDzDbGZzmXxtuuZ2JYwJvEUp8rleR6bEk19MZtvDmBaKRJAOdJ8y/wCJTTD8hhvJZkMHj82/jA6v6fXyqiQk6LvduimhxZ4Bvu2M3JlsVjK4eNl8eLlsWPHxwZmMKVyePJchvxh/FlsXtlOMDOaY4Ec7pN8ZCTIEmqwb8TZZQIwoUGjqCqAQaXmjv353552w6mylC+5x51+G1ju7ri1IA2A+X6d8dGZKlo9fpihls3qQro31xgf2fHuHn7N7Y7FL+owx/VY+hrN+yiN8vGTfllfzltz+EGh27rzWB3zEsU2+oxTXRVa0se5IHBu9/Ufw4Cy0ioykbwTjYfwu2zA+g5/n2xYq+EGy8r3+KIknzLypI9je3fzDgb+Z8MB3m7vJIfvdBjoOl+lZSngDgsB1t7mftgrqsDtGFs+LGVdDuCy7gfcjb6gd2xDoebJs6bQ24F0I3INgmqCSbg7UN/4RgfI5qWZWje2mj+UE7sLGpQfU7Ef3gK5x7pCIWbUDLsysADptSCFI2sjcng7gGxXSk6fDWz/hj0kdXFnGCIWx8QWDv/x/GHQgx5cDxZh5NjbivlJ4A9G7fy9caPwIVyhWMgSyeSMg07PYah7atN9qO+EXT4mmcIigC9l7X6k9xV2T2B9cNviSWPLxLODvBaQk8tI4Pm+1mQ/RcZX5qqKabu7DnZ+5b0eWGAfpyXdSpBhz7qI7Jf1IAEyv+JuqwLqVGWZy4JBU6VMaaBqv5yN6HG9n0IfTOvzylomldiwtPMQQyeZQvoTRUDiytjC/ovwtJJGs8jIkRKk6iQShokggHkcXufbD5J4ob/ZlCyUP3lmyLs1ZPtvyQMMLFGmnwkeciH2Bi5aGiAO84PUrlCgpaikSdIJkXMO5ckydy4ZmxPrPXsmUieOAyyMCTWpVDndrC8nUSSBXPO4wky0RmkdpANUxYvV0NRvbfsaP2rB2agCSuqLSSHUFG3zb/mL59jgmXItFHrXzK3DDknsT7Devej6YGhSKSdKHmzk+3A7Q5nspma9WqtTgDSXVpF2h+SOCbD0cCBVimUbmJCQVvcmqLXxd7/QAY1UQmZFaFyAeFvjm9XoNr98IJ+nOqrI6nzCtG+54Fj0qv9HDnII6B7BB8hr+M1RTTwFo6d9rI9MLZkhYCgX+Yu3qZvfvcYy9ArqlNQEdR5SHkSNi1jG92BDHXJ6vxXr1/p64KyfxW8amxrJqiW4+3fF+U+IwDolWtSMCwFi0AYKqjhWRtQs8mu2A5OnZb96okVTs/JOiMEDf+Jz6D29cDNJL6alNuGl5bZrH8s5zk81QIXSrkmXfaDsoqDkdiIOxIom6y89iWRgtXQFD74A/aQhqnH0kH+S4ZN0+LfQdpADHfJFAk3yOP0xflcvlQpMjakXYG6OqzqG257EfW8FSumgeVJbhvT3ePQ8YR0VFrdShq3US/uS5bcNyOYTf7R/uA/4qP66QcNpOoGWEQCMgkUaPAHm2H09/XFYyuXVgGIYMSQws6aFrtwS3GK5urK/iqYwKpY3PIR10saGxND7EnHTpWQUptL/INPP0e2DUCoAipUABgi5bfZhDdJlpIpj6J5iJJAlFI1NXbtem/Qbb39rvDHp0keVk8J0/ehQSVOo3qIA+bSNtPHF4TT5zMPAY3kJMJNCl3CUDe2/lJ5/hxDUrSpMvl1AFh2JAo16ccH05wRdJS0kVC97PcSOIMxOwjcx8DLh0JkbnrNpZoDg8xMGNmmljYM2rSTR9VHY+4/piMMRetI39KwHJP4LaK8WaTiEH14aQj5QBvXJB7DfE2y0TL/veZeRRzFGfDgHsAPM59+T74GspRNgbR9AL/IdcL0/0w5jz1VFIhgzqIO7PAOxl5ZJGI9Vgjt38TLiRhTo8qaJRVFZUFnUQKElWODqG2F69VQQFCWKTL+zxyMbkikmATwZSOAqtqV/RaJPlJumEBGiCDLKDsCUaaT0vYMF+5v2GB+pRGST954egUHEKGNtKnUCUoXRvzLvTNgcANP52f2fFU5IICSklwQ5WAQQPhKmCZB+Ekv8AsJ0lgb8Kqua8VWk8PLxzSGVUNPMWY+EGrcRiMINuTq9AR9F6DItVDGqRrtY7/wCvUk4wGZ6TGyxtEdICjQ8Zo0BsL7iuxxPJfFM2VUpIBoNAToAQP8a/h77jbCdVSawISfTYc9/XaMNlGYy2jTNNIskeaLdC7B2ZRPQtj6hmE1Cjx6EAj9cfOvin4bgZ9USnLZhfMk8Hk3/vJwfeqJ9e2GEHW3kQMsusEWGUhgR/LEobmcBzv64zSoFDlRxGzP6+qqUjLakrfdm+bj5YSfCSHNu8OZ0w5mGjIFHllU/JNGdhTb36H04DebpmXLeHE5MhuiSKf1ojj7n/ACwD1bIAPl5NNkO+Xeiq3HJFJIBqbYVLEhB7WcW+NEosiDtrH72Z/Y3aJfawMN0VLW/mMQB9H3PHoPQ/g0alJFRSEJ1A6iS0yCEiybOCNzYpcE3p3QDr/fFUX01qb9ucdmerR+L4KQRsmvQGtqr12b9cBpm0osJV00ecrHtewBqS+/0OLI9BIYJDI+xUIzwv9akJS7Gw3vBVUySVLLxAlIHXb62x8ihRQkIy6ku7kkpWVDgMDHAAv74t6n0WTxWSOMlTuvPB/pgTqnQZtILMH0jzLqDFB/TBmclzE5YJM97BoJEEbgDk18rjuSN/bFAi8ObxFnJSNNbFeaHPHN7D0F78HHKaqqWBIcbMT9bPtE7FicCXkqaaqkoQplK/1JDSbAODp3BMC+kscZf9mGOw66qAZWZR5X0uPo6hwPsGrHYpiosh2xCrVlUqiqbuxIvxGKJI0VWXlJf3kSkXpagd/tTAexHrYo8TMgKd5ozWon34J9/53XzYtzEXhMUlJYL5lAvVpJ1K1/hNk+9kjYYMz6pDGjyorS+ULGklAggnWQtkMPLu3II7jAQdLNJNvwts2p2kOTtj0BSVE7ACb/wWBkCLiBIecUKRRtOUbxQoAvyGQE8pYPy0O3AB27r8yhklLhRqmINAdzsR+ffvz3xPLQTZidpChZ5A3AoXX5dufzxqeldNESmOKQHMEbuNxHf8H1qi3asAqVU0d3LcmAwv/aCNh0AsAMUjmPJThAN4ckWawKmhnaNSjcmOQywhIgQgvv4sn8NUSoPtyx9qwFnMxFmJEUKSEV3gev7QDaYUe/lDit9K8+bFfVs0qn9kjZNx+9NkF6/Au1jayD+Jq7cifD8FMYRKhkiZZIW824Nc7V5lI2vfyDtgdOkyTVUS7Rexcai3cBtkE3JiihISnSRdwwlofSOVXJNitrJAcps/SBy773S6BVVsKDUBzxgNvCNPqI32YDg+hF1/kcNuqdKjb5GATbRVtsbsDt83p98KYun0dpA17EaTuPTnHaSqakukkfxxaOMRawqIVpqMT3udyHLtguUwxhULFqDUy0Qi7kggsCRZ7EHcjvgT9thkNq+YYLwAqRqB9fEIH1rDDMdGCoPDQuW+a20AegPtf+WKYeitKwV5FVR6LYHsOF3x2nUphJJJ3n6wAftzLnDSgoEJNMGzXHaSQC0TLWhsUQ9ViModYi7gi5HdnAPagAuo+1V71hx03qTZkM0lqoUfuwL0gM1nYgbgrfpWA4Mkuqgg2ugTsCeSeB63i8F1dNP7yPfS8fmQgnQ4ULe9HAqvhrhInYkuR2/x6POCUqy+PITLJYF4dUA/Iy2oiMT6h0ppRqiOmbysF4OtSWVt9juWu9/O3NAYAyfS/Fd68j0EMR2J9VvjyVpA7hVPfDCXOCOUpIKBdFXYAAMAASSdqIf2GgVXecr+KNA0llNEA3W11q42rejtjgq1Uo0mxZjwD9RYNDc43nFEo0rSVdiz/wAK8xLiC3wtGC2yqxxhWBkgB77NETzXc232wsl+HnBOgeIjbhq5P05GDoOvSKPMgY8FiOa7YYp1+JRajn8PFH61vhbVXp2DveXf6MfruCXOFiv9PzY89TSwiGI6D4tQ4TJSfhOlwM0nSpTSqm67gV6YhJ0xaOoaXNVzueAD9zWNbkviBX2K6T9b/wAsZzrGbBkkkLaOBfJ+WgB7n1wWlVrKWxDfPCdbLZSjTSujUNRyQzNDSZZiIvz0wuXpsviPI5EasABfDtR7jtpu243x0SrCjFPMUFCzas5ChO3BcgfTHTtHCqCRtes7MrBgoHDV3snjY0MVZ1tSskW40GRBxqeM+In5sqjDUqYG0dAwj6PfuNsEtVpJWLqS7ly5NjDAGHYSIu+Frgw07DW27PJa24JBkNkctXt29MN+ndE/aVGZzVxxHzRwDYsDwzkb7+g7endfHlUzM2WjH9m5DuCbBjVde3s3lH3xuf2tCzSHhdlG/wDL1OEVKqJHm+JzO4Dsw4cv2AiDi9mK9OmU1AwWoMSTEXKrOw9ZABDk4KyPS1CBVRI02IVRWM78TdGHykeX8LjZ0b1Vux3w9i+IBR2r0GFefzZmUsdghG31wKimolfmtiT+o5jJrohVBRNWSCLxd7MGeGENjI9JkaLxcu/zIdSngE7FmX0BV0avV2HbElcXvwefvg74zh8PMwsP/MjVT/wCQ/8ArH5DChmwtVUy9Q3nHp8gSugAvaPz6ekkmcRTpbxsXyrad7MXMTfVO31GPMv8Z/s7gZuGSEg/2iDXEe3PzLfoRgzLZlo6NWDgyTOwyfMB/wAQ/wA8Gp19UH89P4bC2d/TKNc61DzBmUIPvL/8gW2bFea+JcrKiacxExfMxAU691cHvtz39cM8h8NvyxA5DLuw9wSoIB+pGE/Tfh7p8mYQGGI67DAbXsTuAd+L3wy6Flv2rJZLUN1giXxJAjAkopHzGyTf64aQtVNZDskhyeNg0/LE9GTp+ElK3WUEgCz6i8sdi9yAZe+GeS+FmU6lkVxY2PcXdcVvVc4UdbEscjeXwx6AAEegsc8c3v8AbBELqYUWOQeGGYqygxkMp4YHcUXU/cemJnPPJlJvF8z5cqA5G7LITan1qufYdxeGB4qajrnaRpMlhFrs/D7zhavTy5plFN0EAqZ9QLDUQ8n4XIliOrYD6bnPEZI5W8wP7qa90PpfJUnYg8cjDVoHcCZP3cwYq422l4JA4IYXqHtjPHLLXib6f4e9+l+l9/tzh1m5T4nUDeynKkezlTx+ZwWolz5fx1JSzcEqBI5HU4zllqXSUKk6ZBeYSpQL3caWSeCQXAS0Zs71FWKmXcegX+mOwd0/qeU8NfFaHxK83iI5a/c/62rHYWMFvB/9BhpNArAUM2Q+xq2+eFEvxPH4SjLwsrhvMG3QijQN6iwBfVR4NnHnTMrNmSznSpBtpq4s2RZs972P+WPW6fBlV15xwT2gB3P+Ijj6YN6RmGzLCTMAZfKjywrq8PWxI06aIJFXuPzIsYOrQmmpVJMf6jL7slz5j2jdzjNOlWrkJqwAIQI9VNCOv7tmAxXFmtchy+WvcHxJvxFaNkk/2S/9R22Hdd1XqbJGIcmC+xEk6KSKSgVUdlAq2O7AjesF/EkUiSJl8pHpgL6pNANs1gnWeaA3A43G3GFnw3mniR4UrxSB5W7HfQKv5juh92iHY4PSpgoFRLGx0k9TKuvAkCBMM0SNfh2MhwLchHfdVzzzLPoZsvHmlBYLSkA+YVwytzqU+U3saU1ZxdMdKRZ2HcIwNUB5SfMlWa0uxr2dP4cDfDE6EOptdRHkB/EQbKn1NAgH8SpRwV01vClkhatzuBsCSKDqONLqarsSh44It0aktCTY7pNxxve0sBIwtrCgCN7/AO4WI/NgT1dRnVSRsVseLBpNWCP3kYHtVgc0D64DPUZIUDZxn3NJFel3Pcn0T1b8sThBhyczK4WVGKxsFumYgDQDwXWuOBxVYo6/8PNM1KQWZqJBJETKB4gJI2QaiR9sJ0wjWyz5XubwxLFoBBBJdzLXGCKpqISpAL8PEuA43YgpAsBpdwFMX1ZkymqWVw4O0cII3G27H0HPvtiHUMz4X+8iYMxUCKJUPzuoo8evmHrQxHqvSlzSKsTHSrASyNtp0D+02P4hq27nBmVykUkCNCTEkJembznRzqqr12TpXcc+2BgoCElRl2VAs0AwWe0SQTs2PhSE6Ei+oSS7FyoGAQAQZ8gVDO7QyxjdWkkjZJX1xszGhdFS6g8khie4v6YQfDucOWaTLeLITZJVfKLW9QBO9lQd6G4G+H+d6YZKlRmVJFAcuVAQKx0NsAN/MNIs2Vwr6j0KX9phmgUyAoGZq02V24J2JUAV3v3wWiumQpClQdjsUyA5iJYO5Dc46adTU6RBYgjfVCiwYkmDZnJTLDBfTXizyyrLqQodCsTVqpJWyRu43BPcVeKcl0+Xxs1GNQTWjhxYB3NjbY2CCBgOSIrNLCpKlkfwxuCugFiT7nn6jBS9ak0RPYKtS6GvRsfMp3AFEAA/Y7Y2pKw/h2UzA7WLjk+UjiCTs4k1AoAVb2JG9wX7cyWIPavN5qZZ42d0I+U+ZK5p6Wxww9O2IZd5BKyOVsj+JSQRfa/Yj8sDZnrul08SCORrBRmFBLoGlFKRsCL435vBD52Lxg3hEzaL1EgL2+Ve5N73sDe2NmmQkeUfCbNsXG9vnwDhCvTpKGrVyZeyvSTsBsHc4uykjDcni/0OIfEX9pIDuA1Ee2/GOy4FagCA29HfB3WaE8lrqU8qdr29cBcCr7/UfycR6ampKHC0/Rf8YTZjpUjZYS6SdNFW/iU2F25FUV3/ALvOD8vlmSNV1qJY6ZhxpvejfJ+nc1gvI9TMbNPIxWNALRRxwqqB3J2A9AL9MZrN5d0zMkZYtqtlc76h8yPfvtv7nBkldUqSosBI+4mIdzMuNr2K1Gmuj4iXmLgWfzf8m3EMqZg/omYSLPxodo2izDZdv7jmNhH/APbKSAD+EjDIA/bCLMZJ5owFIE8bCWFjxqXcqf7r/KffSfXDj4X69FKt7gg06H5kbgqw55wHMD947H3Jf/k59X5GFs+TnEU6pIADhR4WWv0UACO5G2CYIWc0ovDjN5PRGsS7u5H6b/0xbHnFAuNS54A3/njzOZpMrE+bzLbqOBV32RR3ZjsB6nE5dVT/AG3fbBsl+nUyChJ1FUFWyU7ttqNhdrlhjK/HEgfMqi/+QiX9WWSx9gYz/wAQxn2kwOMzI4kzEtB5pD5RWzb+IARyFqKG/wD/ABvviiecdvQYTrBiE8fn1fHr8ixpawIUXHaw9wAfXDrKZxSuhq9rwJmAAaGAstCzkbGiQLwVLDocryBhzI5UrU5wHN52nTOh5OPFzTRh5U3cIyxj1lkHhxAf8br9gcaTpcggdIvGdIY1RNS3xGoUGvfTzvhD8IZf9rzIkr9xlixQ7VJmQhoj+7GCTf8AEww38QqwrSNxvpBrfnj74eGmpVU1gAB8ySL72x5/O1jRNOmm7lRveGBYjYuZsRacaTq+VMmgorEN5QpXSxc76za72FW29sL86VSPwLDMTbV+MixpB76eL7nYcbNUz8h/dhjI73U4VFAK1pXy86r0+aj7YTxBpWeV2VUHLFUFegJO5NdhucDpBVlWFrydtn5DQYdgdLHzaklboBKlxsYAD7kWZy5SATtqBE6HGXk8Rr0RglqHYDgD34H2wwzWoxafD1zTnxZYwLKkgaFsdgt/TUMF9RzKFVXRY2ZYa0+LVU7jlVB3Cn5vpZwF1PPyfsLiNXGYBUystqaY2TY3I4WvcdsECjUUkszkC9g8biHM7uAkSCMfUqKKaFUSqS5JbgCBtqZ2BNtSjBSceZf4dLKC0Uyk3a77bn2x7jGXmz3n/wCvHYonKVP/ALB7f5wHwcv/AKD8sOc3mcrlpGdyuczRJPfwUJ7b/wBpX5fQjCjq8k+Yk8SVyRVhm2VBdFaHy0wK0BZI73iWZhjUhzEgiYWu8mo8gqBr5VgVJO219wCyyrjNxaPCQaTYFv8AN3umslkF2fxRn+IYN5aTVJOxJaBwJYM0geuo4YWrxAUWGwG/fck7P8hhp8MdTLIaDOLCWxOoyAeQ77AOLWuxUEk6sJZuqsJvHCgKxpgFXUOAVLVfawfp6Vj3p3UoRKKDRREaCvzgqaOq+QdQDcHcAcYJ+Ici6SFyupX/ALXTuAezCuNWzi/VhxhZKEJrF0tqFj8xw9rGImcYqVVLpgA2/H5Zpnqf2tgf4lZ7DhyY5KbSOAw329LHmHpqrthvkOmSZ+NJY2VZEGksT332Io6gf5NW42wnyXnU5ZzsRqR+x5I/mf1GD+iyP07W00qoWG8CkFmIur02EviyQRjNbUmnpptrT8MO4PTeLvxN8cosuqSsHT+6Wbq56uTbdtgdV4xaNY9CHMxrr0/Oqt309tRokc0RWFPSuj5hm0Su0SPuw1KC5/w6rJPqcZf4O6pJBIdPymru6Ddjz+ftjT9czeYSZHhdUhlFgBFBsfOCQuo7jm++FqlBdGoqkgiQSCXveBLbkBjY7zgpq0KoC6hV5GBSDDFhNngAFmjSkBoxDOfC7+I4E0dau+sH7gKQCL9cRy/w1NG6suiSiDpDqLo/3gDhGeo5vvm5/wDnYf8AqwZk+pZtBqGZkYmyAxLClsnknkivzwddOsEMFgw0gj6YTCv01RcJUC7uP8kj3jDLrWRmkfSEZL3WM3pNc7/KDiC9dYyxiW3jQjUKA1NVaq24I2HpWJdO+OZkX/eYxIoIBZaXYjY/wng7bdsG/wCxYcyBmcmwK73G1jzAXW/G9bHb0NYVU9MAV0gJDgKEh+9x0f3gMwaKlk1MmsqJIKkm7AxFlB3fpDXc3JBMy7SGJaU0shNuzKNyxFaEIFEVRLYzOe6T4cMsRYNGblSS9vm0sfswS+1MawH02anANlCw1JZUMAeDjc5YjMRNIYF0MraUJLM1VsK2VfKBpA3r7niirKKd/LHo1mc9H4Z3v5d5aoM8ghvOx+ckwGZ9I5JtPx4ybosmaRRGCZUC77C7UWCTxpYEfph5D8MKnnzDaCi6aB8rblrvk81Qo7e4x0EzOskZi/Y5YwpZwzMoAe0IUiqZvqTuO+LM+i551Mb6wijWxNDnfSp+Un8j9t+1K1X4X0pDyA7AgES5SypYX9GxutSopS4GpZcAWdzPlbV5WBMbN3Wuyk+X5BQG1XzZA7C+2Luvf2p9wv6opxVmCtFlrSuwH0/r2+mLurMSysSNLIv56QBW3rjgHmB7/b548toOiof7kn084j3GFuWni86ToXjeidJohlumB+5Fe+HkkEU0cbKTGqDQCxDMpQApdfxKao+gwB0HJq0wJYMwBKqDRJBBq2FbXeGeTMZWaJUEZBDPqeR21WBvY2+bgY7WVLB3DHpw7H6gGQ1r3MmlX9NpqEMX0hpOnzfEPWCRckGQ2YkGhyPQ/wDxhV8QdPk1ftuXYpKB+/VRerv4un8S/wAY5/ELIbGxz/Qx4ZkD+YV6CwNgLPtQvCWESI4pSG7Cjv8A1wdFRKw6DNj9/T8bCaBVyVRyl0qDEQXB9w/DhniQSMC9J+J8+EtcvlH4PjLP+7370AWrFccOY6jLcmYErIbLRD/d8ttv4dk65+aJJK3ZobGnPfDSK/7Rl4YCJDvlswpKEj5vDYfJv+FvKPWqAaf/AFdJHGIZOkzxoBQ/ZtEiAe2ilX6XhOoyS6Ut1iObnbpHbFihlUrRpprCkt8IGl9xqdSlNZxAP9ybxbpaTtoBKpGAiAVwO+/+tsGZb4ZgTzNbV/Edv0r9cKE+KskP/wCPnwfTwiD/ADxL/bZnOnL9Mz8zdvEBjT7sSQPvhfTl9V/z3GGQP1IoZSW9wPpgnrObjFBKpe4oAYyUUsmfdo4GKQA1Nmq290i/iYj+uw3wr6pPPmpmikEcao5RoBNGiBlJB8SSyWAI7Cj29cP+gdfggjEDxT5gRs/htl4/3ZQkEtuwJqTxFvuFXnnDNSuEgU0uE7nc9tg/N+2MUv09dJ6oZVTZ/hHXdyOMb/4ey8cWmOFNESIQi+mxu/ViSST3JOFsEeqVbQyAGyoBsgc7DBHw51nLyE6HKtpYeHINDXRoAHZj7KScFdKiYG1kVWYNStYJAO4sCxuOQbFe+M0qiQFFFm69fUYhf01fxqYrg6ipRLtPw8+VQ6SNgNsMHSVGCBUVZIzVKEKyL5k1Cz7frgWWHmRyIwo1B5KcRAgGo41FWP4jZPN4q6crnM6S7sqtrUklqCjVyfUfrij4ombw4pKK6tSuPULWm79mxtAPiBAIci7cv9gxcEOJfDwzjhSk2CiGfYBO4n4lPDGSQYihTC0jCHMDxrIImBQk3WzG0JPubwxEHhhwzmWaQFWIJpA2xrszVf0xjetlQyOyfMgIZDpNr5brdd9IaqHzDG3ABFg0XCmm2K6wNvrvvvhnM09CUFzPPRt2BbpHVxjq9KHVTABB5LSCQQCT5i15bYJM4zSfDEK7Pn4Q4JDDxODe43F7Y9w66l/4ePNK0vjhNZsroujQve97Nn748xtP6nlyAVZljuGt/wCuKCsgt/LQj/ccJHlGYy2qRQ7r/wAJBA81V/Go1b35kbbfAPSZkjJkV2ThabsSbsMOSKJ3A3rEelzCNtQJMLUr+q72LA79wRyLG1kYl1rINGyIqkhrcBRfPIFc0AD9DhsJDmmbG3bcTEdrTviWtZUQo3/B+eoaMd8QdMKETKo8N9/LuFPcAjajyPY12w++FcxHmlWKdiGj7gkFlHy+bsVO1+n3wJ8KSFT4UyPoIBGzLdG6BFH6fUjvjzO9chgzDj9ij1xuyhlkkW6sWR7jkH3BwCr4iwaLEqAcEEDoLnsCxexwekEvrUQzhwX7iw3v73Bwd1J8jDmDG8kjFG8q6AChIBIMljUD6kH68nGez0a5qeSQHw2JFow42qtXBO25Nb49kgOcd5ySLIsFKratIYWKAAGGMXTJHXyoSygbjcN2BvgsOPcfTHUhNAB1HUwBfazwwEm5vu8k4DmcxqJTTSJMMDb57PFtmhhTH07QlVQP4ub+42OH/SW8eIwnZmB8P+66gg/mp/PCfIzsvBI9R/Ud8Mun54RsWKC20rrHY3s1fS/TjC+Y1kHnbv2+vNsTslVSK0ksbg7jeRMi0QWVthf0vpRlJDN4YAO9ckc1xxiUc4jLF4wyMCqm7AHqCNj9P5YZ/FuU0yrmFOpWI1egYVY+/wDXGfLlGYA9yPUH6jg47TPjJ1bEWs0zN+MFrI/pl+HuDe7vYtbm2/UY9EdFkO9rsexrcEfWq++J9O6lJkirxk6S2qSPsyfLx2PP6YM6SizOqHyEHUCONtyADxf+q3uPxBk0hYrRe1NWaAFVRrcnb1HOCBaVL8JYd7jkfT+MfUhUop/qKZYAs7/h6Yt6r08RZqoxasQyV6Hf8huPthp0KFRB++lrSSBC0mle25C2TuTtgXrMxK5PetUEZIGw42xX8P5pFVlB0TM2z+H4hAA3C+YU196P0OF1hZpMbhrO8EgmASN3YE4fQKVDPKTAHmuQ0hJbYGSwBIHNsaHPzvDCJ9KE6QhK2qhNXkpCN6vvwPW8IYJXhgZifMynfgDzaRt9NR2H8Ppgv4oQaI0aR2lI3B7bXfqpNkVd7+wwu6mwWB3IPlWLYd/KlfTzNufSsBy9MKSDcqPFw7Bn6/8AWCZ5a1VVJT+1LCRBIdR6Fh15fbC3KzFTseecN+ogumXPdlPP+Jv6Yz+V6vOQKYRpwNKgaj7bamP3w+zWYvLwagbp7ursNf58Ycr01JWkkC/2PQYg1KPhoWxd0jp+9H5th7lcknlZig0LoLMSdJregRo4b5q3G2FvRoTeZZn1XpAfnVb6ifyX9Ri86JUWRovFqwFDSAkn+6BXOrUx/h72MU57KfssQdHUSOSGjABA52G/4Dtv3xPTuhy5YSOCT3A9ALON8X6vwBYAKUgkso2KdO7JebOVXsC2FnUJSOSfDdmFelHn89/0wBHPJE3lYgjfY7H39CCMWu6vSNalbA7j32/+fthnkuma4QfD1MDs2q7HNAA774fKk00+a35zHee+JCUqqr8hkB4f7OQOLC+ErzSSHclj6bn60MMOl9HlkLaR5qNAMLHqedjRqrwR8PhXn8LMbJRpRaAkfxVXYH8sMOlH98zZGRHT5WiJKkAG7825WyaYXzgdaspIUlIZg7/tvudn7N1wzlMkK2mop1AkggfEIktP1fdsJ45PDfTJrVVFyO7EaVXluaFD3xnczn5eoOyZcyxZQ2BuVkmX1Y1SRn+EDfve1E/F+dlzWYbJeK0sEUniSb7OxNxQ8CwqkM3bUa/CMNo9OWjA2LHt/rgDC1WrpGs+gcz1YgenvdmsZXLppVPDT5lXdgNI2Abfk37F8YD4n6HHlSrKsIBpSJFZlBpiGsebtR57YbfDuf8AGmiZ3WUEeCWhjMcUWxZIlsDWTpZjXHlxP4ny7ZqJlsBtivpam69vrjO9MjzAkjV0zH7tg2uSUNGgG58NQANTcarOxO3fE+pW8ROonzDFwJaMfWPiX4agkgphYG59fseQcZ7pHV5I2GUmdmD+XLTsbYuu/hyH+IqDpfa+De1cvW2VdJJIIIr333wF1JVkGkHkKQRyrDcMD2IIBwfKPWVp/dsfseX64RzyUooq1fD+SOo29Qb4+mdD6SRGWb8Y4HIAPA99sD/EcbeHHLIiqsZIIbzAD24s0O/esA9E61JJkI3Bo1pcj+IFlevTzq2EnVs0WNfN9yRgtCkupV1E7/K3YFomQ3d/M1sxRoU05ZCC+kOXDOFO/JAUDukFzszSy/XpPB/eMk0mu0hkUMCu26mgQbsAAjjYbY9zXxtEkMaZaAJKook0wTv5bNsbJNtx74zuZyLMbLC/vhn0ToozMmmY0QL1py3s1ir73yaPPOLK6GVCda7CWED2DAjp32JwzRz6ltTSpyWAeTy7mxj7hiHxm5M/ISSzMSSSTbcnc98djZTdHETGMRkheDtxyMdgv9dTNkx6YXNWqktpPvj3/ZBjzLOrKlDUWY0kYY7g1uxLAgKO1X7PE6rHGrTHMwtoLBSFIY9tGj5vbVxVHGYzvV2zKFDGkMRNh9zqIvuxJZdzso29+9E3SGD/ACa2pSSSdI2G4A3P3IHthRdAVABmCxZtrC7nbfeOCTh3xk0mKQ8u7qE7MIJDdJmwgzy/xNmpCx1Td9RSRlUX/j1Bf0rFcGQy/wA0jMxJJKnff3ba/sPvgh4zQDuqgcKKNfQKKB/LEpCiBdFlyLsgbelDfeu59sGUsWQGfj+f4tidUzdRYk25Ln2/ztgzxNELosioPKREqkH79x6747pPVJIwxvVfY2dwCdvy/XC5TaNfNr/I4siNeH7kk/Qmv8jgCqSSkgy/8f4wFNdepKkkhuCeT/PbgDEq0td2G4P19fcHnBujyKTwLZvt8o++4++F8biircHv6H1/r/2GHOcyjqukiiw7so7f5tZ/LHKimIBOAU0Eg1Eglum+z9HDdo2OCuk9V0ZGUFAxUbk99RC/etX6YUdTyccRU6teoA0KXgDcn3+mCFyrJk2Fi5WX8a8LZJv7phc+SdtPFkfxr2JHr6DGKSUhalAs6i/WB93th2tUqGlTQpLskNFvMekunSZsCMWZbMFdwAt3QH0sknk+nPc+mJ9DzQEw8S21bC9/MaANet7ffEDAxLVVAUvnTiwL+9k/fBXQst4bNOwQiLZfOpBmqgOa8otj9sbVpCVfnYe/87HHMshaqyHsC5JBZh8R9n9+uL/i+dTmFC8RhU9rBNgfQ4N6UXXLupVoUBYnMrpDBdz+IWew8u/0wo6d02adiopjeonUpo9zseO35emHHxnkWdFlfzNESxi1Eo0YBs12ayAd+MLq0OjL6h9bWhxfrAZyCMUsn4i6lTNkEPYM17h2NgB8Pm4IMYF63HIuWj1SqxgpTtZLkAneqGmq9aon5hjjmD4AmChghplPBBGggjutaR+eLOk9SM0EEnhIyrrSXyljqXSFUA2AXBW2omgfTA0ssiLHFOgj2JQ0BsbBDC63uu3bHdKvgIDgmI5OqzTu9wCDjua8lTxQSykjYljGkuYF4G5SzuSQJmc8pb5FTYUyBR5e3b7UDWGU/TJDlYm0mhrYnf5WC1tzW2BB0QzIUjdQwIYK1iwL1C6sgEg8WN77HDw9feGJUcIWAC2rXe3cVQNc7/bHKiz5RSkgyCZZiPm/VsI+CkoXUzSlAFLAgPLgt7gcRuMIshmnhDLbMrCiAxsDfcH1s4JXNoAPCCpKooOw2Wr30jYE3779t8EL8SB9mhia++w/W8Dr1zKMd8qR7iQ/yO2PiFkklB6sQX2kEh42MHfAKa9AAp1ww/1JWG3ghKm7uDxOLTpjLTh1eVvkJ4TbdyKtiOw+/wBL546iklE27rTAXVmhIRRs3uAaBF48R8gwPzIfQ7/yx5/s7KufJmR/h8NsC1Mz6g39rwNoB/HMknBRVqsyDTVLxUA8xefMUkmethZg1Uk0NiQK0kuggszBdtJXU3vp5Nj198ZmX4niCyeCGljgAkdYlRFXmgWdlke/YHna+ManM/D7FSFnjIby1YAAYi9jsdidjzjBfEkUkJXKy6WKyxaZSBqMbzJqVmHa+RxunqAC0ShflSpz327EbO0MZ3wzSKkh82j4iYHwmAZb4iqXBU0PpLnBvw3l/CTXIbkILSHu0r7yH6kmsSzErOxJ5Pb09sSy3DMeF/mcVwycscSc3U1VDwMeg/TkNQCzJVJPJOISCtsDS4vLXviqXCuKGF8zYZ5KAir/ABCxhXmMPcrOP2QOeYzp+t7AD3NqPrh3IFqr4l/rCSrKKA6fUYY/CD1lc3H/AAZg6fpIiSf/AJSNi7MKWHlFkbmufsOTgb4Qtoc8OW1pf10Qk/amwTHkmdl2PmNL2v79h74qU2C17MpX57DHjs5TetT/ANifcv8Ac/QYDgy5a7OlR8zHgf1ODoHcsEgBGn8Rq/eydq9f6Yfx5QqsPjEApIBHfysxva9yePm33IwD8Q/FETSSRiOzp0LKG5DfPtXbej98dTWVVUyUuPcCW3+L7e+KKMiKdPWtRT6FywcszlLENImC41MAc5kZmdiwYm9z9NvTHYEl611CImONnZF2VtOq17b/AE7duO2OwdKK7BvDb/cR8tMYEvIU1KKtVSeiT89U98JHgDEykllHzaj5geAp+vAI7X6Vg7N9QlqN5gWR1JG4BFEg1+mxxd1xPKmYgoRsW1BdwH/GpvkVwDyu/rgHqOTXwYpVI3+aMWSlkkE9wD2v1G5w4CF6SrlrSIkRYuL9hgykEakn1mD16jj/ALYqFVamB1JY1EfMo9x2P6e+LOoR07elnSfa6H5cVjOwzMh1KSD6jD6PqSE6ZBp1BWvsSQCT/dP6H25xmpRUlQIkfPbCRoOCE45fkP8AiH6A/wBcTlQl9I5UAfShv9rvfDDJ9MvRrZVjJJ8SxR2FDnv/AKvEc+URXPzRj5mBUAknYk7nntX09SsKqdbCfz69Mc/p16HUG/H7tN7YHzEoRm07sTer0vfb8/8A4x7kIpJ5FjBLMeLJOwxVFmGldI8vDcjqK24AtbOrgCuaGNF1DNCMNHDobMsoErpYFfwoPys/08uVk02S3mI3uNnPCfWbAYKnKhaSuqWQDYb3LJdnV1aAXNmKn4izKs4jjNxxbKfWzbn8/wBAMQTL1CHLBbJAuzsd7oDvvXteB2gMJ/eLRHCHv7n2/wBeuL8tl5JjpGy0TLIdggJpTfY7Agd8aYJQADA3+vue8kAPjCQqrVPl8xsBDcdgALQwDnEOn5VZmMUbM241sNKBBuSSfNxX8hgrPZlWKZeBAUQ6UuyWJPmY7iyT6jE53WCHwoQRGTbOeZjtuf4QNyF7bXvinJdJBjE0kywoxIVmDHfbuNh7WbNHGdaSdRJba7k8kDfpsHBYuzGgt/T0A5uohg4GwKv2vvuqQ4Yq0PTMtJBJofMZffSWiFayO1AAHVvQ39OcVZXPqryCV7JNIv4WRt1IvbzAkNZ2I9sU5oCaFYhOs7Fh4UtVp0MDos7+aqv1r7Is1McxBqqp4Wc6CK1IP7Va+jF9P+McAYXpUBVfXuwMN6swg2L2EkwHr60oTppizliXINyHBIcA6gAS7iLgH9HjGUzUuVEkirmRUT1VHcxsG1Xe5U7bnDGCSMFP3LO7IU1SEHQyAqVI4BsE7mzue+EjznMZW080kFyKG5aMnz0RuCh3sEfirbGj6fMZakTSVnUO0RoAtQWRb7NYBB9cbzQVp1qvZW0gXLTIYsY8rctjWGSE8+WHZ3sDwp7DUQoM5bCuLLhKIkDuGCsFBK1vQDfxgA8cXXpg7PyuGCyqskZrSH06h7agb/W8S/2I6EnLbgmypoMh+p5+2BB0qawNDarOm+x9f++AFaFqfUPWD9mb6dGOItSpXojSmmoOzEeZJ2uxC+0MRZ4Ef91RxcTIy0a1mvUbMOD9sUHJ5MNWqZf7gKD7E/MfvixoXhYGS9aja9yDvuD+uPFza7z3+/RSo12bcCg2o7bCjuORgyVESCT6kztd467PjNLMhRKTpSyrKQAw3tpkcdMX5fKQOdMYYhRx5VA+pO5P1wNnR4RFoVv1Oo9tj6Hcbe4xHpfVwQr5oyeJGdnUrpkUmwG3rbgkdqwr6L1N0eWOVBLZLUSfnU7kEc2Lv1rGxRqOo30tvfljA6yAdmGCVspRqJYqD3gC1/MA6gbi53NsMpFvUtBwPK61fI3BHpyMZbrfT4lZY43zEk1a0yxbxNChlkJs0yj92pC2zfQb4ZJK/jswJtiSa2+bc/a8edRgMbZiaaK4pnjaLMA1LDIsUS+KO4RStFhxuCCpOOrBplnuPcwLWMExcgN3x+neFSWqNSQHZgWvNibMIaVCbAipJqy7MpsEqbH8OxBwDHPgPpWdePxYZKILlQw423r2vVqA9NhxjwvRxEzlPTUJ5x679OUBSFJ3ax5G3y/i4w1G3OPJMd1GQhwFF2B3oAe+KszFJQ86gEXspJ+1tX6HCrYe1YH1qHXXwWAqiSb7ADcn2GDsrCRHLqtacBIzW2/zNX4q2rtv9gMjCqyoxJJsW7Gz2+wG3AAGCfiDMFYZZgQA50ISaGttgSfQXZP1xRyASlWtVhPtOJn6maikBCA5VHvE40n/AIf7QMxu5pJ5T/gXyp+awqfuPXBOV6tIztCKXxAVRqsoSo7nsw7+pB9cNem9OCLlRGLWOMwE+oCAKffUp59sZsdMd7vSqDWNbOqhdW2kk99yR9ffDuXCFv4jOfq5sN+24hmx58k+ODTcyW5KdKGHcPfY2x5NO00YhdisqO3hWTuBpOm+xF7e1jkAYrzYjzC+MxCyL/aJdFiNq+jc32v/AJm/WYenLDEZcxqlQjX4bLIzGha0DQ4ADH03s3jKT/GTIpEESwuTvKPMzIpOhSDY77mvNQvFLLhdUaqSSJN4E3uHIN4BIM3Jw9UypBZahI7mBBYMxA8pBLFL3Zy/EfUDvGCE/CLrb6XjsYDN9UkmdpJJCWY7m9PGw2Gw2HbHYcT+nLadD/7CfnqD92GNClT/AL//ACb5aYxq+g539mklimXVD/5q87qQAV/vBjz6XiXX8k+WlDq+pJRqR6rUrdip4HsRjsdhZflzCG/eCD6JBB77dQwLsMBUHpL/ALCG9SXHyccF2YEghDJiRDItIqVrBsgXwVqyQfTt+uITTIqoVXUaI1OPQn8PHcc3jsdg6CSS5sQPdL98KsyQecSyk/jExzSME3bVu2gqCbA9CLFD29MPeifDrzwtI7CDK1e3mY6SCWocnkWfahQrHY7CeerKpISUQ6gO3UbPAu/zLu5RCV6iqWST36HdvX7M76l1KCKBY8l5NXlchaagO7NuTbc364RJ+4cG7dTwOAfc9/oPzx2OwGjSCPI5LyXkly0neMRa2cqZgeMpgRAAsG4Es7OcOSGSWPNZpgG2aOICyfTceVRZvkn2xH4k6p47jUCIx+AH5jZBY9hx7nb3x2OwClTSopqETIHQObfzfrZms5mV0lVcsn4fKTclRIBOqfkGHS73ZvLRJlo5Mw8mncRrGB5a+a7O91f9cDdI6llPOkbTSK6m4WAVa7ljZBNegx2OwehlxVytRaiYKo2gn+L364czSxlwhVNI1aUnVcuQByxg2IIsGYAYUk/sWcETeaFwg9yh4f2YMbr6jg4I+JYXjcZqJqkiYCRhtZYnQ9d9YFEe2/Jx2OwQqOqjUN1AP1chM+h+Q2GNrZKikbGOnlUsexEcAnkud8OdM0OM6dMeV0s9WSVJOl0AAJK7flp98BdV+KElnqNSYtCqL2oi91H4dmqvbHY7HMvTTXq1VrkpOgdg09+v3xrPpSnKhIEL8x7sPljWw5i4BLIplKfM2oqQLoX/ABfXBcXWKjEjLSmwiWSTWxs9qx2OxDCE1FlBFlt6MD2HoMIjO16VIVkmTRCzAlXieG5LalRLEkav7fLgLMZiPNNpIMb/AIH+a/XbthB1LItGxRgL/PHY7B0E06mhNmf54mV6hzOVOaqfGFgEiHBDyLOOYLXfCPJKyy6QaDAgjkbC7I4O4xfmc/cqkiqAogIfKLBBsXvvwe/GOx2K8KW5H7f5H2x0VlgAA8/KcN+mdOMjks1KlliOKHt74G+Jj+1KV0Lp0usSkC0dkYIQ3ItiP89tsdjsTknVUJOwj1D+/XDGXekMtojxFebqy2A7dLEly8NheldNT9pOVVi0ciLKrm96XUGo7glCorsVNUKGKSpVqbcXQbv9D/X/AOcdjsLZjzEPj19EMokcA/UfYYNLsSt9gR/LFzsSPpj3HYyKCMG1nAkjURfJ2A9TgrN5Rc1mMvlGAMcaCVx21OGCAA87amJ9SOOMe47DKUhIYdT7DCtQlaiDx9S351nD34AzjZWdunyOWXdsu5skLGbaI+wWyD6begGf689Ow9CR+Rx7jsP/AKQAK60i0YkVkBSKS1Xdf8+5MnGclnOA5ZTjsdj1qQMN0qaWxR4hx7jsdg2GNIx//9k="></img><br></br>
            <small className="text-muted">Last updated {new Date().toLocaleString()}</small>


            <h6 className="story-content">

                <p>                  One of the elite developments in the security of smart contracts is the use of Artificial Intelligence (AI) and Machine Learning (ML) technology. This duo will help to detect and prevent malicious activity on smart contracts. It will also help to monitor and analyze the data and information contained within them. Overall, AI can identify any breached contracts fast and resolve them in no time.
                </p>

                {/* storyDetails.general_access && storyDetails.nftholder_access == 2 ? ( */}
                <ModalContribute
                // setReadFullStory={setReadFullStory}
                // e={storyDetails}
                >
                </ModalContribute>
                {/* )  */}


<h4>Future Thoughts</h4><br></br>
                <p>
                    Smart contracts security will be even stronger in 2023. The security measures and advanced technologies will help in developing robust smart contracts. As a result, users will confidently use them for their transactions and agreements. With that said, the adoption of smart contracts will become more widespread. You will be requiring futuristic smart contract development services to create a future-ready smart contract for your enterprise</p><br></br>
                    <h4>How smart contracts are advancing</h4><br></br>
<p>
Given this potential, it’s become clear that smart contracts must advance in order to accommodate growth. John Woods, chief technology officer of the Algorand Foundation — the supporting organization of the eponymous blockchain ecosystem — told Cointelegraph that today’s smart contracts have a number of technical restrictions, such as scalability issues, which have resulted in slow transaction time and the inability to process complex computations.</p><br></br>
<p>According to Woods, this methodology allows enterprises to benefit from smart contacts, yet only when simple computations are involved. While this may serve as a solution to current limitations, advancements are being made to ensure that all enterprise data can be supported by smart contracts.

For example, Scott Dykstra, chief technology officer and co-founder of Space and Time — a decentralized data platform — told Cointelegraph that his firm is building a community-operated off-chain data platform that can handle any workload in a single cluster.

“We’re working to enable developers to run queries against data we’ve indexed from all major blockchains and data loaded from any off-chain source,” he explained. After queries are run, Dykstra explained that Space and Time uses patented novel cryptography, known as “Proof of SQL,” which can prove each query result is accurate and that the underlying data hasn’t been tampered with.</p><br></br>
<p>This is an important point, as Dykstra pointed out that enterprise data queries are typically run in off-chain data warehouses. But, because these data warehouses are centralized, query results often can’t be trusted by a smart contract and, therefore can result in limitations.

Given that Space and Time can cryptographically prove that each data query result is accurate, Dykstra explained that this allows for complex computations to be connected directly to smart contracts without limitations.

“Space and Time’s ability to connect analytic query results directly to smart contracts (with cryptographic guarantees), will serve as a trustless intermediary between enterprise data and the limited storage of the blockchain,” he said. In turn, this process will automate more complex business logic for enterprise use.</p><br></br>
<h4>Smart contracts in the future</h4><br></br>
<p>
Concerns aside, it’s notable that solutions are being developed to advance smart contract capabilities. Industry experts are, therefore, confident that enterprises will use smart contracts in the future. 

“There is no doubt that enterprises will eventually adopt smart contract solutions. There are multiple promising technological innovations occurring in the public blockchain space that have smart contracts at their core,” said Zhang.

That said, it’s important to mention that platforms on which smart contracts execute are also advancing. For example, Woods noted that Algorand focuses on scalability to support enterprise use cases. “It’s not that smart contracts need to get more expressive, but we need to give more resources to smart contracts as well. We also need to focus on scaling blockchains </p><br></br>
            </h6>
        </div>

    );
};

export default FanfictionDetail;