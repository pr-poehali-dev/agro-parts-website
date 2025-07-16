import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Двигатели", icon: "Cog", count: "1200+" },
    { name: "Трансмиссия", icon: "Settings", count: "800+" },
    { name: "Гидравлика", icon: "Wrench", count: "600+" },
    { name: "Электрика", icon: "Zap", count: "400+" },
    { name: "Топливная система", icon: "Fuel", count: "300+" },
    { name: "Кабина", icon: "Home", count: "200+" }
  ];

  const regions = [
    "Московская область", "Краснодарский край", "Ростовская область", 
    "Белгородская область", "Воронежская область", "Самарская область"
  ];

  const advantages = [
    { 
      icon: "Shield", 
      title: "Гарантия качества", 
      description: "Все запчасти сертифицированы и проходят строгий контроль"
    },
    { 
      icon: "Truck", 
      title: "Быстрая доставка", 
      description: "Доставка по всей России в течение 1-3 дней"
    },
    { 
      icon: "Headphones", 
      title: "Техподдержка 24/7", 
      description: "Наши специалисты всегда готовы помочь с выбором"
    },
    { 
      icon: "Database", 
      title: "Большой склад", 
      description: "Более 10,000 наименований запчастей в наличии"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Tractor" size={32} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">АгроЗапчасти</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#advantages" className="text-gray-600 hover:text-blue-600 transition-colors">Преимущества</a>
              <a href="#categories" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#regions" className="text-gray-600 hover:text-blue-600 transition-colors">Регионы</a>
              <a href="#order" className="text-gray-600 hover:text-blue-600 transition-colors">Заказать</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Запчасти для любой сельхозтехники
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Поставляем качественные запчасти по всей России. 
              Работаем с физическими и юридическими лицами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input 
                placeholder="Поиск по каталогу..." 
                className="bg-white text-gray-900 border-0"
              />
              <Button size="lg" variant="secondary">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О компании</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы специализируемся на поставке запчастей для сельскохозяйственной техники любых марок и моделей. 
              Наша компания работает на рынке более 15 лет и зарекомендовала себя как надежный поставщик.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">лет на рынке</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-600">наименований</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">Почему выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Категории запчастей</h2>
            <p className="text-xl text-gray-600">Полный ассортимент для любой техники</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={category.icon} size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Широкий выбор качественных запчастей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Регионы поставки</h2>
            <p className="text-xl text-gray-600">Доставляем по всей России</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border flex items-center">
                <Icon name="MapPin" size={20} className="text-blue-600 mr-3" />
                <span className="text-gray-700">{region}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              <Icon name="Map" size={20} className="mr-2" />
              Посмотреть все регионы
            </Button>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как заказать</h2>
            <p className="text-xl text-gray-600">Простой процесс оформления заказа</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Поиск запчасти</h3>
              <p className="text-gray-600">Найдите нужную деталь в каталоге или обратитесь к менеджеру</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Оформление</h3>
              <p className="text-gray-600">Укажите количество и контактные данные</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">Получите заказ удобным способом</p>
            </div>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Быстрый заказ</CardTitle>
              <CardDescription className="text-center">
                Оставьте заявку и наш менеджер свяжется с вами
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
              </div>
              <Input placeholder="Название запчасти или артикул" />
              <Input placeholder="Модель техники" />
              <Button className="w-full">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={48} className="text-blue-600 mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (800) 123-45-67</p>
                <p className="text-gray-600">Звонок бесплатный</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Mail" size={48} className="text-blue-600 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@agrozapchasti.ru</p>
                <p className="text-gray-600">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-blue-600 mx-auto mb-4" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Пн-Пт: 9:00-18:00</p>
                <p className="text-gray-600">Сб-Вс: 10:00-16:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Tractor" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">АгроЗапчасти</h3>
              </div>
              <p className="text-gray-400">
                Надежный поставщик запчастей для сельхозтехники
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Двигатели</a></li>
                <li><a href="#" className="hover:text-white">Трансмиссия</a></li>
                <li><a href="#" className="hover:text-white">Гидравлика</a></li>
                <li><a href="#" className="hover:text-white">Электрика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">О нас</a></li>
                <li><a href="#advantages" className="hover:text-white">Преимущества</a></li>
                <li><a href="#regions" className="hover:text-white">Доставка</a></li>
                <li><a href="#contacts" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связаться</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 123-45-67</p>
                <p>info@agrozapchasti.ru</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Phone" size={20} className="text-blue-400" />
                  <Icon name="Mail" size={20} className="text-blue-400" />
                  <Icon name="MessageCircle" size={20} className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 АгроЗапчасти. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;