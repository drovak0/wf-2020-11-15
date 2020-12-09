# Many to Many

## Heroes and Powers

```python
from django.db import models

class Hero(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.CharField(max_length=255)
    # powers = models.ManyToManyField(Power, related_name="heroes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Power(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.CharField(max_length=255)
    # heroes = models.ManyToManyField(Hero, related_name="powers")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

Hero.objects.create(name='Saitama', description='Trains hard', image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MvRqCQBzQMuOfSWxDGvfoAHaEK%26pid%3DApi&f=1')

Power.objects.create(name='👊 One Punch 👊', description="It's too strong!", image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EYxY7MSbxHB_GHe0xjey6AHaDt%26pid%3DApi&f=1')

Hero.objects.create(name="", description="", image="")
Power.objects.create(name="", description="", image="")

Hero.objects.create(name="black panther",description="superhumanly acute senses, enhanced strength, speed, agility",image="https://i.pinimg.com/originals/5d/15/7e/5d157ef79d513ba57b45bf849f4f8268.jpg")

Hero.objects.create(name="thor",description="superhuman strength, speed, agility, durability and immunity to most diseases",image="https://static.wikia.nocookie.net/disney/images/4/4a/Thor_Odinson_TDW_poster_textless.jpg/revision/latest/top-crop/width/360/height/450?cb=20130615173905")

Hero.objects.create(name='batman',description="who doesn't know him!",image='https://images.app.goo.gl/2nHFKme9BNp4rMEH9')

Hero.objects.create(name="gumball", description="nice", image="https://images.app.goo.gl/FRXcZYzz6NJ98Zo96")

Hero.objects.create(name="flash", description="fast", image="https://cdn.mos.cms.futurecdn.net/kTarztWuVfLaAmzY5HeQEC-1200-80.jpg")
```
